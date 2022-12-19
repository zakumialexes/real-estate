import { faCommentDots, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import React from "react"
import mainStyle from "../main-dashboard.module.scss"

const RightSide = () => {
    return (
        <Box sx={{ width: { xs: "100%", lg: "40%" } }} className={mainStyle.container}>
            <Typography fontSize="18px" fontWeight="bold" my={2}>
                Recent Activities
            </Typography>
            {/* Looping to render 2 times */}
            {[1, 2].map((data) => (
                <div key={data}>
                    <Stack
                        my={3}
                        direction={{ xs: "row", lg: "column", xl: "row" }}
                        spacing={2}
                        alignItems={{ xs: "center", lg: "flex-start", xl: "center" }}
                    >
                        <Box width="auto">
                            <Stack
                                backgroundColor="rgba(255, 90, 95,0.149)"
                                justifyContent="center"
                                alignItems="center"
                                width="50px"
                                height="50px"
                                sx={{
                                    borderRadius: "50%",
                                }}
                            >
                                <FontAwesomeIcon icon={faHouse} color="rgb(255, 90, 95)" fontSize="20px" />
                            </Stack>
                        </Box>
                        <Typography variant="p" fontSize="16px">
                            Your listing <span style={{ fontWeight: "bold" }}>Luxury Family Home</span> has been
                            approved!
                        </Typography>
                    </Stack>
                    <Stack
                        my={3}
                        direction={{ xs: "row", lg: "column", xl: "row" }}
                        spacing={2}
                        alignItems={{ xs: "center", lg: "flex-start", xl: "center" }}
                    >
                        <Box width="auto">
                            <Stack
                                backgroundColor="rgba(255, 90, 95,0.149)"
                                justifyContent="center"
                                alignItems="center"
                                width="50px"
                                height="50px"
                                sx={{
                                    borderRadius: "50%",
                                }}
                            >
                                <FontAwesomeIcon icon={faCommentDots} color="rgb(255, 90, 95)" fontSize="20px" />
                            </Stack>
                        </Box>
                        <Typography variant="p" fontSize="16px">
                            Kathy Brown left a review on <span style={{ fontWeight: "bold" }}>Renovated Apartment</span>
                        </Typography>
                    </Stack>
                    <Stack
                        my={3}
                        direction={{ xs: "row", lg: "column", xl: "row" }}
                        spacing={2}
                        alignItems={{ xs: "center", lg: "flex-start", xl: "center" }}
                    >
                        <Box width="auto">
                            <Stack
                                backgroundColor="rgba(255, 90, 95,0.149)"
                                justifyContent="center"
                                alignItems="center"
                                width="50px"
                                height="50px"
                                sx={{
                                    borderRadius: "50%",
                                }}
                            >
                                <FontAwesomeIcon icon={faHeart} color="rgb(255, 90, 95)" fontSize="20px" />
                            </Stack>
                        </Box>
                        <Typography variant="p" fontSize="16px">
                            Someone favorites your <span style={{ fontWeight: "bold" }}>Gorgeous Villa Bay View</span>{" "}
                            listing!
                        </Typography>
                    </Stack>
                </div>
            ))}
        </Box>
    )
}

export default RightSide
