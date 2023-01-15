import React, { useState } from "react"
import { useRef } from "react"
import { Stack, styled, TextField, IconButton, createTheme } from "@mui/material"

//icons
import ClearIcon from "@mui/icons-material/Clear"
import CheckIcon from "@mui/icons-material/Check"
import { usePatchReviewMutation, usePostReplyMutation } from "../../api/api"

export const WriteReply = ({ replyId, bodyText, myReview, setAction, setIsEdit, Reply, rating, reply = false }) => {
    const [updateReview] = usePatchReviewMutation()
    const [addReply] = usePostReplyMutation()
    const [editValue, setEditValue] = useState(bodyText)
    const ref = useRef(null)
    const CustomTextField = styled(TextField)({
        "& fieldset": {
            border: "1px solid rgb(235, 235, 235) !important",
            borderRadius: "8px",
            color: "#484848",
            fontSize: "14px",
            paddingLeft: "20px",
        },
    })

    const theme = createTheme({
        palette: {
            success: {
                main: "#0bff00",
            },
            danger: {
                main: "#ff0008",
            },
        },
    })

    const onSubmit = async (e) => {
        setEditValue(ref.current.value)
        e.preventDefault()

        const date = new Date().toLocaleDateString().split("/")
        const months = [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]
        const dateFormat = `${months[date[0] - 1]} ${date[1]}, ${date[2]} `
        if (Reply) {
            try {
                //reply data (name) should update later
                const postData = {
                    reviewId: replyId,
                    myReview: true,
                    proFileSrc: "/assets/reviews/review4.png",
                    reviewedName: "Anna Harrison",
                    date: dateFormat,
                    rating: 0,
                    bodyText: ref.current.value,
                }
                await addReply(postData)
            } catch (err) {
                console.log(err.message)
            }
        } else {
            try {
                const putData = {
                    id: replyId,
                    rating: rating,
                    bodyText: ref.current.value,
                }
                console.log(putData)
                await updateReview(putData)
            } catch (err) {
                console.log(err.message)
            }
            setAction((prevState) => !prevState)
            setIsEdit((prevState) => !prevState)
        }
    }
    return (
        <form sx={{ width: "100%", margin: "0", padding: "0" }}>
            <Stack direction="column" spacing={2}>
                <CustomTextField inputRef={ref} multiline rows={4} defaultValue={myReview ? editValue : ""} />
                <Stack direction="row" spacing={2}>
                    <IconButton
                        color="danger"
                        theme={theme}
                        aria-label="cancel"
                        onClick={() => {
                            setAction((prevState) => !prevState)
                            setIsEdit((prevState) => !prevState)
                        }}
                    >
                        <ClearIcon />
                    </IconButton>
                    <IconButton type="submit" color="success" theme={theme} aria-label="submit" onClick={onSubmit}>
                        <CheckIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </form>
    )
}
