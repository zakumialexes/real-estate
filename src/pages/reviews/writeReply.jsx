import React, { useState } from 'react'
import { useRef } from 'react';
import { Stack, styled, TextField, IconButton, createTheme } from '@mui/material'

import api from './api';

//icons
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

export const WriteReply = ({ replyId, bodyText, myReview, setAction, setIsEdit, Reply }) => {
    const [editValue, setEditValue] = useState(bodyText);
    const ref = useRef(null);
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
                main: '#0bff00',
            },
            danger: {
                main: '#ff0008'
            }
        },
    });

    const onSubmit = async (event) => {
        setEditValue(ref.current.value)

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
        // event.preventDefault();
        const dateFormat = `${months[date[0] - 1]} ${date[1]}, ${date[2]} `
        console.log(dateFormat)
        if (Reply) {
            try {
                //reply data (name) should update later
                const postData =
                {
                    "parentId": replyId,
                    "myReview": true,
                    "proFileSrc": "./assets/reviews/review4.png",
                    "reviewedName": "Anna Harrison",
                    "date": dateFormat,
                    "rating": 0,
                    "bodyText": ref.current.value,
                }
                await api.post(`/Reviews`, postData)
            } catch (err) { console.log(err.message) }
        } else {
            try {
                const response = await api.get(`/Reviews/${replyId}`)
                const putData = {
                    ...response.data, bodyText: ref.current.value,
                };
                await api.put(`/Reviews/${replyId}`, putData)
            } catch (err) { console.log(err.message) }
        }
    };
    return (
        <form sx={{ width: '100%', margin: '0', padding: '0' }} onSubmit={onSubmit}>
            <Stack direction='column' spacing={2}>
                <CustomTextField
                    inputRef={ref}
                    multiline
                    rows={4}
                    defaultValue={myReview ? editValue : ''}
                />
                <Stack direction='row' spacing={2}>
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
                    <IconButton type='submit' color="success" theme={theme} aria-label="submit">
                        <CheckIcon />
                    </IconButton>
                </Stack>
            </Stack>

        </form >
    )
}
