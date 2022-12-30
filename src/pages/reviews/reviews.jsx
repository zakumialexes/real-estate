import React from 'react'
import { Box, Card, CardContent, Typography, useMediaQuery } from '@mui/material'
import { Stack } from '@mui/system'
import { useState, useEffect } from 'react'

//customComponents
import { SearchBar, Review } from "./customComponents"

const Reviews = () => {
    const mediumScreen = useMediaQuery('(max-width:990px)');
    const [ReviewData, setReviewData] = useState()
    const [searchfilterData, setSearchfilterData] = useState(ReviewData);

    let isMyReview = false;
    let isVisitorReview = false;
    useEffect(() => {
        fetch("http://localhost:3500/Reviews?")

            .then((response) => response.json())
            .then((data) => {
                setReviewData(data)
                setSearchfilterData(data)
            })
    }, [])
    const getReplies = (replyId) => {
        return searchfilterData.filter(reply => reply.parentId === replyId)
            .sort(
                (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
    }
    const style = {
        titleCon: {
            width: '100%',
            alignItems: mediumScreen ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            margin: '40px 0'
        }
    }
    return (
        <Stack sx={{ maxWidth: '100%', padding: '10px 30px' }}>
            <Stack direction={mediumScreen ? 'column' : 'row'} style={style.titleCon}>
                <Box width='100%'>
                    <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '900', marginBottom: '15px' }}>Reviews</Typography>
                    <Typography variant='subtitle1'>We are glad to see you again!</Typography>
                </Box>
                <Box width='100%'>
                    {ReviewData &&
                        <SearchBar
                            searchInputData={ReviewData}
                            setSearchfilterData={setSearchfilterData}
                        />
                    }
                </Box>
            </Stack>
            <Card variant='outlined' sx={{ marginBottom: '30px' }}>
                <CardContent>
                    <Typography sx={{ marginBottom: '20px', fontWeight: '700' }}>My Reviews</Typography>
                    {searchfilterData ?
                        <Stack spacing={4} direction="column"
                            sx={{ justifyContent: "flex-start" }}
                        >
                            {searchfilterData?.map((data, index) => (
                                data.myReview && data.parentId == null &&
                                <Stack key={index} sx={{ marginTop: '0 !important' }}>
                                    {
                                        isMyReview &&
                                        < Box sx={{ width: '100%', borderBottom: '1px solid #ebebeb;', marginBottom: '30px' }} />
                                    }
                                    <Review
                                        id={data.id}
                                        myReview={data.myReview}
                                        proFileSrc={data.proFileSrc}
                                        alt="Review profile img"
                                        reviewedName={data.reviewedName}
                                        date={data.date}
                                        rate={data.rating}
                                        bodyText={data.bodyText}
                                        setSearchfilterData={setSearchfilterData}
                                        replies={getReplies(data.id)}
                                    />
                                    {isMyReview = true}
                                </Stack>
                            ))
                            }
                            {!isMyReview &&
                                <Typography sx={{ color: 'red', fontWeight: '700' }}>No data avaliable</Typography>
                            }
                        </Stack>
                        :
                        <Typography sx={{ color: 'red', fontWeight: '700' }}>No data avaliable</Typography>
                    }
                </CardContent>
            </Card>
            <Card variant='outlined' sx={{ marginBottom: '30px' }}>
                <CardContent>
                    <Typography sx={{ marginBottom: '20px', fontWeight: '700' }}>Visitor Reviews</Typography>

                    {searchfilterData ?
                        <Stack spacing={4} direction="column"
                            sx={{ justifyContent: "flex-start" }}
                        >
                            {searchfilterData?.map((data, index) => (
                                !data.myReview && data.parentId == null &&
                                <Stack key={index} sx={{ marginTop: '0 !important' }}>
                                    {
                                        isVisitorReview &&
                                        < Box sx={{ width: '100%', borderBottom: '1px solid #ebebeb;', marginBottom: '30px' }} />
                                    }
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
                                        setSearchfilterData={setSearchfilterData}
                                        replies={getReplies(data.id)}
                                    />
                                    {isVisitorReview = true}

                                </Stack>

                            ))
                            }
                            {!isVisitorReview &&
                                <Typography sx={{ color: 'red', fontWeight: '700' }}>No data avaliable</Typography>
                            }
                        </Stack>
                        :
                        <Typography sx={{ color: 'red', fontWeight: '700' }}>No data avaliable</Typography>
                    }
                </CardContent>
            </Card>
        </Stack >
    )
}

export default Reviews