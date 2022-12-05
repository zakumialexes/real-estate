import { Box, Typography } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";
import mainStyle from "../main-dashboard.module.scss";

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Sample tooltip with border",
    },
    tooltip: {
      backgroundColor: "#65fe08",
      color: "#ff5a5f",
      mode: "index",
      intersect: false,
    },
  },
  hover: {
    mode: "nearest",
    intersect: false,
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const chartData = {
  labels: ["January", "Febuary", " March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 30, 45, 3, 8, 50, 0],
      lineTension: [0.3],
      borderColor: "#E35C85",
    },
  ],
};

const LeftSide = () => {
  return (
    <Box
      sx={{ width: { xs: "100%", lg: "60%" } }}
      className={mainStyle.container}
    >
      <Typography fontSize="18px" fontWeight="bold" my={2}>
        View Statistics
      </Typography>
      <Line options={options} data={chartData} />
    </Box>
  );
};

export default LeftSide;