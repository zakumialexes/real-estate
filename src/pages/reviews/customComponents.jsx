import { useState } from "react"
import {
    styled,
    TextField,
    Typography,
    Box,
    Stack,
    useMediaQuery,
    Button,
    Tooltip,
    Zoom,
    Modal,
    Rating,
} from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { editBtn, deleteBtn, replyBtn } from "./svg"
import { WriteReply } from "./writeReply"
import { useDeleteReviewMutation } from "../../api/api"

export const IconButton = ({ path, title, clicked }) => {
    const style = {
        fill: "#ff5a5f",
        backgroundColor: "rgb(247, 247, 247)",
        borderRadius: "5px",
        width: "min-content",
        zIndex: 10,
    }

    return (
        <Tooltip title={title} arrow TransitionComponent={Zoom} placement="top">
            <Box sx={style} onClick={clicked}>
                <svg height="45" width="45" viewBox="-20 -670 600 950">
                    <path transform="scale(1,-1)" fill={style.fill} d={path} />
                </svg>
            </Box>
        </Tooltip>
    )
}

export const DeleteModal = ({ children, open, setOpen, handleOpen, handleClose }) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "white",
        boxShadow: 24,
        borderRadius: "10px",
        p: 3,
    }
    return (
        <Box>
            <IconButton clicked={handleOpen} path={deleteBtn} title="Delete" />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>{children}</Box>
            </Modal>
        </Box>
    )
}
export const CustomTextField = styled(TextField)({
    "& fieldset": {
        border: "1px solid rgb(235, 235, 235) !important",
        borderRadius: "8px",
        color: "#484848",
        fontSize: "14px",
        paddingLeft: "20px",
    },
})

export const SearchBar = ({ searchInput, setSearchInput, setSearchedKeyword }) => {
    const medium = useMediaQuery("(max-width: 990px)")
    const smallScreen = useMediaQuery("(max-width:500px)")
    const style = {
        container: {
            margin: "20px 0",
            width: "100%",
        },
        search: {
            backgroundColor: "white",
            borderRadius: "5px",
            minWidth: medium ? "" : "300px",
            width: medium && "100%",
            justifyContent: "center",
        },
        select: {
            height: "100%",
            marginTop: "20px",
            width: "220px",
        },
    }
    const handleInput = ({ target: { value } }) => {
        !value && setSearchedKeyword("")
        setSearchInput(value)
    }
    return (
        <Stack
            direction={medium ? "column" : "row"}
            sx={{
                width: "100%",
            }}
            CustomTextField
            justifyContent="space-between"
        >
            <Stack
                direction="row"
                justifyContent={smallScreen ? "center" : "flex-end"}
                alignItems="center"
                flexWrap="wrap"
                spacing={2}
                flexGrow={1}
                sx={style.container}
            >
                <CustomTextField
                    sx={style.search}
                    margin="normal"
                    required
                    onChange={handleInput}
                    onKeyDown={(e) => e.key === "Enter" && setSearchedKeyword(searchInput)}
                    fullWidth
                    value={searchInput}
                    id="search"
                    name="search"
                    autoComplete="Search"
                    placeholder="Search Courses"
                    InputProps={{
                        endAdornment: (
                            <Box onClick={() => setSearchedKeyword(searchInput)}>
                                <FontAwesomeIcon icon={faSearch} />
                            </Box>
                        ),
                        disableUnderline: true,
                    }}
                />
            </Stack>
        </Stack>
    )
}

export const RoundedProfImg = ({ src, alt }) => {
    const smallScreen = useMediaQuery("(max-width:500px)")
    const style = {
        width: smallScreen ? "120px" : "120px",
        height: "120px",
        borderRadius: "50%",
    }
    return (
        <Box>
            <img src={src} alt={alt} style={style} />
        </Box>
    )
}

export const Action = ({ children, reviewId, reply = false }) => {
    const [open, setOpen] = useState(false)
    const [deleteReview] = useDeleteReviewMutation()
    const style = {
        heading: {
            color: "red",
            margin: "15px 0 20px 0 ",
        },
        description: {
            lineHeight: 1.6,
        },
        buttons: {
            margin: "15px 0",
        },
    }
    const handleDelete = async (reviewId) => {
        setOpen(false)
        deleteReview(`/${reply ? "reviewReplies" : "reviews"}/${reviewId}`)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false)

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
            {children}
            <DeleteModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}>
                <Typography sx={style.heading} variant="h4">
                    Are you sure?
                </Typography>
                <Typography sx={style.description} variant="h6">
                    Do you really wanna delete this? This process can't be undone!
                </Typography>
                <Stack justifyContent="flex-end" alignItems="center" direction="row" spacing={2} sx={style.buttons}>
                    <Button variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={() => handleDelete(reviewId)}>
                        Delete
                    </Button>
                </Stack>
            </DeleteModal>
        </Stack>
    )
}

export const Review = ({
    id,
    myReview,
    proFileSrc,
    alt,
    reviewedName,
    date,
    rate,
    bodyText,
    replies = [],
    reply = false,
}) => {
    const smallScreen = useMediaQuery("(max-width:760px)")
    const E_smallScreen = useMediaQuery("(max-width:560px)")

    const [action, setAction] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [rating, setRating] = useState(rate)
    const EditReview = (id) => {
        setIsEdit(true)
        setAction((prevState) => !prevState)
    }

    const ReplyReview = (id) => {
        setIsEdit(false)
        setAction((prevState) => !prevState)
    }

    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#bcc52a",
        },
        "& .MuiRating-iconHover": {
            color: "#d5e01c",
        },
    })
    const style = {
        nameContainer: {
            width: "100%",
            alignItems: E_smallScreen ? "flex-start" : "center",
            justifyContent: "space-between",
        },
        titleContainer: {
            margin: smallScreen ? "0 0 5px 0" : "0 5px 10px 0",
            fontSize: "18px",
            fontWeight: "900",
        },
        replyCon: {
            width: "100%",
            padding: "20px",
            justifyContent: "flex-start",
        },
    }
    return (
        <Stack Stack spacing={3} direction={E_smallScreen ? "column" : "row"} style={style.replyCon}>
            <RoundedProfImg src={proFileSrc} alt={alt} />
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                <Stack direction={E_smallScreen ? "column" : "row"} style={style.nameContainer}>
                    <Box>
                        <Stack direction={smallScreen ? "column" : "row"} spacing={2}>
                            {myReview && (
                                <Typography variant="h6" style={style.titleContainer}>
                                    Your review on
                                </Typography>
                            )}
                            <Typography style={style.titleContainer} sx={{ color: "#ff5a5f" }}>
                                {reviewedName}
                            </Typography>
                        </Stack>
                        <Typography variant="subtitle1">{date}</Typography>
                    </Box>
                    <Box>
                        <StyledRating
                            name="review  rating"
                            value={Number(rating)}
                            readOnly={!isEdit}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setRating(newValue)
                            }}
                        />
                    </Box>
                </Stack>
                {action && isEdit && (
                    <Stack sx={{ width: "100%" }}>
                        <WriteReply
                            rating={rating}
                            replyId={id}
                            bodyText={bodyText}
                            myReview={myReview}
                            setAction={setAction}
                            setIsEdit={setIsEdit}
                        />
                    </Stack>
                )}
                {!isEdit && <Typography>{bodyText}</Typography>}
                {myReview ? (
                    !action && (
                        <Stack spacing={2} direction="row">
                            <IconButton path={editBtn} title="Edit" clicked={() => EditReview(id)} />
                            <Action reviewId={id} reply={reply} />
                        </Stack>
                    )
                ) : (
                    <Stack spacing={2} direction="row">
                        <IconButton path={replyBtn} title="Reply" clicked={() => ReplyReview(id)} />
                    </Stack>
                )}
                {action && !isEdit && (
                    <Stack sx={{ width: "100%" }}>
                        <WriteReply
                            Reply={true}
                            replyId={id}
                            myReview={myReview}
                            setAction={setAction}
                            setIsEdit={setIsEdit}
                        />
                    </Stack>
                )}
                <Stack sx={{ width: "100%" }}>
                    {replies.map((replies, index) => (
                        <Review
                            key={index}
                            id={replies.id}
                            myReview={replies.myReview}
                            proFileSrc={replies.proFileSrc}
                            alt="Review profile img"
                            reviewedName={replies.reviewedName}
                            date={replies.date}
                            rate={replies.rating}
                            bodyText={replies.bodyText}
                            reply={true}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}
