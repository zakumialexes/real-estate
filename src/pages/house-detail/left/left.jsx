import { Box } from "@mui/material";
import React from "react";
import Plan from "./plan/plan";
import Detail from "./detail/detail";
import leftStyle from "./left.module.scss";
import Video from "./video/video";

const Left = () => {
  return (
    <Box className={leftStyle.leftContainer}>
      <Detail />
      <Plan />
      <Video />
    </Box>
  );
};

export default Left;
