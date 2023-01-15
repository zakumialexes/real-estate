import { useState } from "react"
import {
    Grid,
    Paper,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Box,
    TextField,
    Rating,
    Button,
} from "@mui/material"

export default function CommentSection() {
    const [totalState, setTotalState] = useState({
        rating: 4.5,
        reviews: 256,
        id: "0",
    })
    const [reviews, setReviews] = useState([
        {
            id: "1",
            username: "Alexa",
            date: "December 20, 2022",
            review: `I have been comparing this house with others in different aspects like
            enviroment, neighbourhood, and others.And this one is 8 out of 10.I
            definitely recommand it.`,
            rating: 4,
        },
    ])
    const submitReview = () => {
        const date = new Date()
        const months = [
            "January",
            "February",
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
    }
    const [commentState, setCommentState] = useState({
        username: "",
        review: "",
        rating: 4,
    })
    return (
        <Box sx={{ marginTop: "20px" }} id="review">
            <Paper sx={{ padding: "25px 25px 15px 25px" }}>
                <Grid container>
                    <Grid
                        display="inline-grid"
                        gridTemplateColumns="max-content max-content max-content"
                        item
                        xs={8}
                        columnGap="4px"
                        gridAutoRows="1fr"
                        rowGap="4px"
                    >
                        <Grid container alignItems="center">
                            <Typography variant="h2" fontSize="18px" fontWeight="bold" color="text.main">
                                {totalState.reviews} Reviews
                            </Typography>
                        </Grid>
                        <Grid container gap="2px" alignItems="center">
                            <Rating name="read-only" defaultValue={4.5} readOnly />
                        </Grid>
                        <Grid item sx={{ opacity: 0.5 }} height="100%">
                            ( {totalState.rating} out of 5 )
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={0}
                        sx={{ display: { xs: "none", sm: "block" } }}
                        justifyContent="flex-end"
                        color="#ff0000"
                    >
                        Write a Review
                    </Grid>
                </Grid>
                <Grid>
                    <List>
                        {reviews.map((review) => (
                            <ListItem key={review.id}>
                                <ListItemAvatar
                                    key={review.id}
                                    sx={{ width: "90px", height: "90px", display: "flex", alignItems: "center" }}
                                >
                                    <Avatar
                                        alt="Profile Picture"
                                        src="images/agents/agent-1.jpg"
                                        sx={{ width: "70px", height: "70px" }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Grid display="grid" gridTemplateColumns="max-content max-content">
                                            <Typography
                                                color="text.main"
                                                fontWeight="bold"
                                                fontSize="18px"
                                                display="inline-flex"
                                                alignItems="flex-end"
                                            >
                                                {review.username}
                                            </Typography>
                                            <Typography
                                                display="inline-flex"
                                                alignItems="center"
                                                gap="5px"
                                                marginLeft="8px"
                                            >
                                                <Rating name="read-only2" value={review.rating} readOnly />
                                            </Typography>
                                        </Grid>
                                    }
                                    secondary={
                                        <>
                                            <Typography fontSize="14px" margin="8px 0 12px 0" lineHeight="1.2rem">
                                                {review.date}
                                            </Typography>

                                            <Typography fontSize="14px" lineHeight="1.2rem">
                                                {review.review}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Paper>
            <Paper sx={{ padding: "25px", marginTop: "20px" }}>
                <Typography color="text.main" fontWeight="bold">
                    Write a Review
                </Typography>
                <Grid display="inline-grid" gridTemplateColumns="max-content max-content" margin="30px 0">
                    <Rating
                        name="read-only3"
                        value={commentState.rating}
                        onChange={(e) => setCommentState({ ...commentState, rating: e.target.value })}
                        precision={0.5}
                    />
                    <Typography
                        display="inline-flex"
                        alignItems="center"
                        fontWeight="350"
                        fontSize="14px"
                        color="text.main"
                        marginLeft="30px"
                    >
                        Your Rating & Review
                    </Typography>
                </Grid>
                <TextField
                    type="text"
                    placeholder="Your Name"
                    value={commentState.username}
                    onChange={(e) => setCommentState({ ...commentState, title: e.target.value })}
                    fullWidth
                />
                <TextField
                    fullWidth
                    sx={{
                        marginTop: "20px",
                        height: "200px",
                    }}
                    inputProps={{ style: { height: "100%" } }}
                    placeholder="Your Review"
                    value={commentState.review}
                    onChange={(e) => setCommentState({ ...commentState, review: e.target.value })}
                    multiline
                    rows={6}
                />
                <Button
                    color="reviewSubmitButton"
                    variant="contained"
                    sx={{
                        boxShadow: "none",
                        borderRadius: "8px",
                        padding: { xs: "10px", sm: "15px" },
                        border: "2px solid #ff5a5f",
                        "&:hover": {
                            backgroundColor: "#fff",
                            color: "#ff5a5f",
                            boxShadow: "none",
                        },
                    }}
                    onClick={submitReview}
                >
                    {" "}
                    Submit Review
                </Button>
            </Paper>
        </Box>
    )
}
