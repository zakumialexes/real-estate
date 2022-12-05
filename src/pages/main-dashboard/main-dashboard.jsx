import {
  faCommentDots,
  faEye,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import CountUp from "react-countup";
import LeftSide from "./left-side/left-side";
import mainStyle from "./main-dashboard.module.scss";
import RightSide from "./right-side/right-side";

const countData = [
  {
    number: 37,
    title: "All Properties",
    icon: faHouse,
    color: "rgb(29, 41, 62)",
    bgColor: "rgba(29, 41, 62, 0.149)",
  },
  {
    number: 24,
    title: "Total Views",
    icon: faEye,
    color: "rgb(148, 153, 218)",
    bgColor: "rgba(148, 153, 218, 0.149)",
  },
  {
    number: 12,
    title: "Total Visitor Reviews",
    icon: faCommentDots,
    color: "rgb(255, 90, 95)",
    bgColor: "rgba(255, 90, 95, 0.149)",
  },
  {
    number: 37,
    title: "Total Favorites",
    icon: faHeart,
    color: "rgb(255, 188, 125)",
    bgColor: "rgba(255, 188, 125, 0.149)",
  },
];

const MainDashboard = () => {
  return (
    <Box width="100%" sx={{ backgroundColor: "#f7f7f7" }} p={{ xs: 2, lg: 5 }}>
      <Box mb={5} py={2}>
        <Typography
          variant="h5"
          fontSize="30px"
          fontWeight="bold"
          style={{ lineHeight: "2.5rem" }}
        >
          Howdy, Ali!
        </Typography>
        <Typography variant="p" fontSize="14px">
          We are glad to see you again!
        </Typography>
      </Box>

      <div className={mainStyle.viewContainer}>
        {countData?.map((data, index) => (
          <Stack
            mr={{ xs: 2, md: 3, lg: 4 }}
            mb={{ xs: 2, md: 3, lg: 4 }}
            p={{ xs: 2, xl: 4 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid rgb(235, 235, 235)",
              borderRadius: "10px",
              "&:last-child": {
                marginRight: { lg: 0 },
              },
            }}
          >
            <Stack direction="column">
              <CountUp
                end={data.number}
                duration={3.5}
                style={{ fontSize: "36px" }}
              />
              <Typography variant="p">{data.title}</Typography>
            </Stack>
            <Stack
              backgroundColor={data.bgColor}
              justifyContent="center"
              alignItems="center"
              width="100px"
              height="100px"
              sx={{
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon
                icon={data.icon}
                color={data.color}
                fontSize="25px"
              />
            </Stack>
          </Stack>
        ))}
      </div>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        alignItems={{ xs: "center", lg: "flex-start" }}
        spacing={5}
      >
        <LeftSide />
        <RightSide />
      </Stack>
      <Stack justifyContent="center" alignItems="center" mt={10}>
        <Typography variant="p" fontSize="14px" color="#8a99b3">
          © 2020 Find House. Made with love
        </Typography>
      </Stack>
    </Box>
  );
};

export default MainDashboard;