import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import chartStyle from "./property-chart.module.scss";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

const inputStyle = {
  width: "100%",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#ebebeb",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ebebeb",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ebebeb",
  },
};



export const options = {
  plugins: {
    tooltip: {
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

export const hourlyData = {
  labels: [
    "Jun 2019",
    "Jul 2019",
    "Aug 2019",
    "Sep 2019",
    "Oct 2019",
    "Nov 2019",
    "Dec 2019",
    "Jan 2020",
    "Feb 2020",
    "Mar 2020",
    "Apr 2020",
    "May 2020",
  ],

  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [30, 40, 66, 65, 40, 56, 80, 70, 60, 80, 110, 130],
      lineTension: [0.3],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const weeklyData = {
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

export const monthlyData = {
  labels: ["January", "Febuary", " March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 60, 21, 81, 56, 55, 40],
      backgroundColor: "rgba(238,158,182, 0.5)",
      borderColor: "rgb(238,158,182)",
      borderWidth: 2,
    },
  ],
};

export const data = {
  labels: [
    "Principle and Interest $23.565",
    "HOA Dues $ 2,036",
    "Property Texes $1.068",
  ],
  datasets: [
    {
      data: [50, 25, 25],
      backgroundColor: ["#95C730", "#53A9DB", "#DB8553"],
      borderColor: ["white"],
      borderWidth: 2,
    },
  ],
};

const selectValues = ["Term", "aa", "Term 1", "aab", "Term 2"];

const PropertyChart = () => {
  const [selectValue, setSelectValue] = useState("0");
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };
  return (
    <>
      <div className={chartStyle.container}>
        <Typography fontSize="18px" fontWeight="bold">
          Payment Calculator
        </Typography>
        <Stack justifyContent="center" alignItems="center" height="350px">
          <Doughnut data={data} />
        </Stack>
        <Grid container spacing={5} mt={2}>
          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <Select
                value={selectValue}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={inputStyle}
              >
                <OutlinedInput
                  sx={inputStyle}
                  style={{ margin: "10px", width: "95%" }}
                  placeholder="Search"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <FontAwesomeIcon icon={faSearch} />
                    </InputAdornment>
                  }
                />

                {selectValues?.map((data, index) => (
                  <MenuItem value={index} key={index}>
                    {data}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <OutlinedInput placeholder="Interest" type="text" sx={inputStyle} />
          </Grid>
          <Grid item xs={12} md={6}>
            <OutlinedInput
              placeholder="Home Price"
              type="text"
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <OutlinedInput
              placeholder="Down Payment"
              type="text"
              sx={inputStyle}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <OutlinedInput placeholder="10%" type="text" sx={inputStyle} />
          </Grid>
        </Grid>
      </div>
      <div className={chartStyle.container}>
        <Stack
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
          spacing={2}
        >
          <Typography fontSize="18px" fontWeight="bold">
            Property Views
          </Typography>
          <Box>
            <Box>
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
                <Tab label="Hour" />
                <Tab label="Weekly" />
                <Tab label="Monthly" />
              </Tabs>
            </Box>
          </Box>
        </Stack>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Stack alignItems="center">
              <Line options={options} data={hourlyData} />
            </Stack>
          )}
          {tabIndex === 1 && (
            <Stack alignItems="center">
              <Line options={options} data={weeklyData} />
            </Stack>
          )}
          {tabIndex === 2 && (
            <Stack alignItems="center">
              <Bar options={options} data={monthlyData} />
            </Stack>
          )}
        </Box>
      </div>
    </>
  );
};

export default PropertyChart;