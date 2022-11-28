import { Typography, Stack, Rating, Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import videoStyle from "./video.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nearby } from "../../data";

const Video = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

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
                  textTransform: " none",
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
              <Box>
                <video controls width="100%">
                  <source
                    src="https://pixabay.com/videos/house-stone-street-motorbike-old-14476/"
                    type="video/mp4"
                  />
                </video>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Typography>The second tab</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </div>
      <div className={videoStyle.container}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="18px" fontWeight="bold">
            Walkscore
          </Typography>
          <p>image</p>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Stack direction="row" alignItems="center" spacing={2} mr={3}>
            <p className={videoStyle.walkScoreCpntainer}>70</p>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <b>Walk Score</b>
              <span>Somewhat Walkable</span>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2} mr={3}>
            <p className={videoStyle.walkScoreCpntainer}>40</p>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
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
          <Box pb={2}>
            <Stack direction="row" spacing={1} alignItems="center" py={1}>
              <FontAwesomeIcon
                icon={data.icon}
                color={data.color}
                fontSize="20px"
              />
              <Typography fontSize="16px" fontWeight="bold">
                {data.title}
              </Typography>
            </Stack>
            <Stack direction="column">
              {data.location?.map((location) => (
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                  style={{ lineHeight: 0.3 }}
                >
                  <p>
                    {location.name}
                    <span style={{ color: "#767676" }}>
                      ({location.mile} miles)
                    </span>
                  </p>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Rating
                      name="read-only"
                      value={4}
                      readOnly
                      sx={{ fontSize: "18px" }}
                    />
                    <p> {location.review} reviews</p>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Box>
        ))}
      </div>
    </>
  );
};

export default Video;
