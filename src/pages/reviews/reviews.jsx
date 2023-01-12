import React from "react"
import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"

//customComponents
import { SearchBar, Review } from "./customComponents"
import { useGetByParametersReviewListQuery } from "../../api/api"

const Reviews = () => {
    const mediumScreen = useMediaQuery("(max-width:990px)")
    const [searchedKeyword, setSearchedKeyword] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const { data: ReviewData, isSuccess } = useGetByParametersReviewListQuery(
        `/reviews?_embed=reviewReplies${searchedKeyword ? `&q=${searchedKeyword}` : ""}`
    )
    let isMyReview = false
    let isVisitorReview = false
    const style = {
        titleCon: {
            width: "100%",
            alignItems: mediumScreen ? "flex-start" : "center",
            justifyContent: "space-between",
            margin: "40px 0",
        },
    }
    if (isSuccess) {
        const visitorReviews = ReviewData.filter((review) => !review.myReview)
        const myReviews = ReviewData.filter((review) => review.myReview)
        return (
            <Stack sx={{ maxWidth: "100%", padding: "10px 30px" }}>
                <Stack direction={mediumScreen ? "column" : "row"} style={style.titleCon}>
                    <Box width="100%">
                        <Typography variant="h2" sx={{ fontSize: "30px", fontWeight: "900", marginBottom: "15px" }}>
                            Reviews
                        </Typography>
                        <Typography variant="subtitle1">We are glad to see you again!</Typography>
                    </Box>
                    <Box width="100%">
                        {ReviewData && (
                            <SearchBar
                                searchInput={searchInput}
                                setSearchInput={setSearchInput}
                                setSearchedKeyword={setSearchedKeyword}
                            />
                        )}
                    </Box>
                </Stack>
                <Card variant="outlined" sx={{ marginBottom: "30px" }}>
                    <CardContent>
                        <Typography sx={{ marginBottom: "20px", fontWeight: "700" }}>My Reviews</Typography>
                        {myReviews ? (
                            <Stack spacing={4} direction="column" sx={{ justifyContent: "flex-start" }}>
                                {myReviews?.map(
                                    (data, index) =>
                                        data.parentId == null && (
                                            <Stack key={index} sx={{ marginTop: "0 !important" }}>
                                                {isMyReview && (
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            borderBottom: "1px solid #ebebeb;",
                                                            marginBottom: "30px",
                                                        }}
                                                    />
                                                )}
                                                <Review
                                                    id={data.id}
                                                    myReview={data.myReview}
                                                    proFileSrc={data.proFileSrc}
                                                    alt="Review profile img"
                                                    reviewedName={data.reviewedName}
                                                    date={data.date}
                                                    rate={data.rating}
                                                    bodyText={data.bodyText}
                                                />
                                                {(isMyReview = true)}
                                            </Stack>
                                        )
                                )}
                                {!isMyReview && (
                                    <Typography sx={{ color: "red", fontWeight: "700" }}>No data avaliable</Typography>
                                )}
                            </Stack>
                        ) : (
                            <Typography sx={{ color: "red", fontWeight: "700" }}>No data avaliable</Typography>
                        )}
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ marginBottom: "30px" }}>
                    <CardContent>
                        <Typography sx={{ marginBottom: "20px", fontWeight: "700" }}>Visitor Reviews</Typography>

                        {visitorReviews ? (
                            <Stack spacing={4} direction="column" sx={{ justifyContent: "flex-start" }}>
                                {visitorReviews?.map(
                                    (data, index) =>
                                        data.parentId == null && (
                                            <Stack key={index} sx={{ marginTop: "0 !important" }}>
                                                {isVisitorReview && (
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            borderBottom: "1px solid #ebebeb;",
                                                            marginBottom: "30px",
                                                        }}
                                                    />
                                                )}
                                                <Review
                                                    id={data.id}
                                                    Reply="true"
                                                    myReview={data.myReview}
                                                    proFileSrc={data.proFileSrc}
                                                    alt="Review profile img"
                                                    reviewedName={data.reviewedName}
                                                    date={data.date}
                                                    rate={data.rating}
                                                    bodyText={data.bodyText}
                                                    replies={data.reviewReplies}
                                                />
                                                {(isVisitorReview = true)}
                                            </Stack>
                                        )
                                )}
                                {!isVisitorReview && (
                                    <Typography sx={{ color: "red", fontWeight: "700" }}>No data avaliable</Typography>
                                )}
                            </Stack>
                        ) : (
                            <Typography sx={{ color: "red", fontWeight: "700" }}>No data avaliable</Typography>
                        )}
                    </CardContent>
                </Card>
            </Stack>
        )
    }
}

export default Reviews
