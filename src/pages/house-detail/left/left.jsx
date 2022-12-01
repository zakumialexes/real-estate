import { Box } from "@mui/material";
import React from "react";
import Plan from "./plan/plan";
import Detail from "./detail/detail";
import Video from "./video/video";
import Location from "./location/location";
import PropertyChart from "./property-chart/property-chart";

const Left = () => {
  return (
    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
      <Detail />
      <Location />
      <Plan />
      <Video />
      <PropertyChart />
    </Box>
  );
};

export default Left;
