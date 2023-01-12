import { Box, Typography } from "@mui/material";
import React from "react";

const Copyright = ({ align = "center", top = 0 }) => {
  const date = new Date();
  return (
    <Box sx={{ textAlign: align, mt: "20px" }}>
      <Typography
        sx={{ transition: "all .5s" }}
        fontSize="14px"
        color="#8a99b3"
      >
        &copy; {date.getFullYear()} Shwe Real Estate. Made with love
      </Typography>
    </Box>
  );
};

export default Copyright;
