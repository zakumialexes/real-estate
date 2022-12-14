import { Typography, Stack, Rating, Box, Tab, Tabs, Modal } from "@mui/material"
import React, { useState } from "react"
import videoStyle from "./video.module.scss"
import { Nearby } from "../../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faPlay } from "@fortawesome/free-solid-svg-icons"

const Video = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [tabIndex, setTabIndex] = useState(0)

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex)
    }

    return (
        <>
            <div id="video" className={videoStyle.container}>
                <Box>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={tabIndex}
                            onChange={handleTabChange}
                            sx={{
                                "& .MuiTabs-indicator": { backgroundColor: "#ff5a5f" },
                                "& .MuiTab-root": {
                                    color: "484848",
                                    textTransform: "none",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                },
                                "& .Mui-selected": { color: "#ff5a5f !important" },
                            }}
                        >
                            <Tab label="Property Video" />
                            <Tab label="Virtual Tour" />
                        </Tabs>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        {tabIndex === 0 && (
                            <Box pt={1}>
                                <div style={{ position: "relative" }}>
                                    <img
                                        src="https://img.freepik.com/free-photo/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering_41470-3753.jpg?size=626&ext=jpg&ga=GA1.2.755197081.1668255134&semt=sph"
                                        alt=""
                                        width="100%"
                                        style={{ borderRadius: "10px" }}
                                    />
                                    <div className={videoStyle.playIcon} onClick={handleOpen}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                </div>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    sx={{ zIndex: 9999 }}
                                >
                                    <Box className={videoStyle.videoContainer}>
                                        <Box width="100%" sx={{ textAlign: "right", fontSize: "22px" }}>
                                            <FontAwesomeIcon icon={faClose} onClick={handleClose} color="white" />
                                        </Box>
                                        <video controls width="100%" autoPlay>
                                            <source src="" type="video/mp4" />
                                        </video>
                                    </Box>
                                </Modal>
                            </Box>
                        )}
                        {tabIndex === 1 && (
                            <Box pt={1}>
                                <div style={{ position: "relative" }}>
                                    <img
                                        src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=626&ext=jpg&ga=GA1.2.755197081.1668255134&semt=sph"
                                        alt=""
                                        width="100%"
                                        style={{ borderRadius: "10px" }}
                                    />
                                    <div className={videoStyle.playIcon} onClick={handleOpen}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                </div>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    sx={{ zIndex: 9999 }}
                                >
                                    <Box className={videoStyle.videoContainer}>
                                        <Box width="100%" sx={{ textAlign: "right", fontSize: "22px" }}>
                                            <FontAwesomeIcon icon={faClose} onClick={handleClose} color="white" />
                                        </Box>
                                        <video controls width="100%" autoPlay>
                                            <source src="" type="video/mp4" />
                                        </video>
                                    </Box>
                                </Modal>
                            </Box>
                        )}
                    </Box>
                </Box>
            </div>
            <div className={videoStyle.container}>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Typography fontSize="18px" fontWeight="bold">
                        Walkscore
                    </Typography>
                    <Box>
                        <img src={"/images/resource/wscore.png"} alt="image alt" />;
                    </Box>
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }}>
                    <Stack direction="row" alignItems="center" spacing={2} mr={3}>
                        <p className={videoStyle.walkScoreContainer}>70</p>
                        <Stack direction="column" alignItems="center" justifyContent="center">
                            <b>Walk Score</b>
                            <span>Somewhat Walkable</span>
                        </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2} mr={3}>
                        <p className={videoStyle.walkScoreContainer}>40</p>
                        <Stack direction="column" alignItems="center" justifyContent="center">
                            <b>Bike Score</b>
                            <span>Bikable</span>
                        </Stack>
                    </Stack>
                </Stack>
                <p className={videoStyle.link}>More Details Here</p>
            </div>
            <div className={videoStyle.container}>
                <Typography fontSize="18px" fontWeight="bold" pb={2}>
                    What's Nearby
                </Typography>
                {Nearby?.map((data, index) => (
                    <Box key={index} pb={2}>
                        <Stack direction="row" spacing={1} alignItems="center" py={1}>
                            <FontAwesomeIcon icon={data.icon} color={data.color} fontSize="20px" />
                            <Typography fontSize="16px" fontWeight="bold">
                                {data.title}
                            </Typography>
                        </Stack>
                        <Stack direction="column">
                            {data.location?.map((location, index) => (
                                <Stack
                                    key={index}
                                    direction={{ xs: "column", sm: "row" }}
                                    justifyContent="space-between"
                                    sx={{ lineHeight : "1.7rem"}}
                                >
                                    <p>
                                        {location.name}
                                        <span style={{ color: "#767676" }}>({location.mile} miles)</span>
                                    </p>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Rating name="read-only" value={4} readOnly sx={{ fontSize: "18px" }} />
                                        <p> {location.review} reviews</p>
                                    </Stack>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                ))}
            </div>
        </>
    )
}

export default Video
