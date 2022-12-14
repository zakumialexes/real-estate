import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import houseDetailStyle from "./house-detail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconData, navItems } from "./data";
import Left from "./left/left";
import { Link } from "react-scroll";
import Right from "./right/right";
import ImageSlider from "./house-image-slider/house-detail-slider";

const HouseDetail = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Box width="100%">
      <ImageSlider />
      <div className={houseDetailStyle.nav}>
        {navItems?.map((data, index) => (
          <Link
            key={index}
            to={data.link}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <span
              className={`${houseDetailStyle.navItem} ${
                selected === index ? houseDetailStyle.navActive : ""
              }`}
              onClick={() => toggle(index)}
            >
              {data.name}
            </span>
          </Link>
        ))}
      </div>
      <Grid
      p={5}
      gap={7}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {iconData?.map((data, index) => (
          <Stack
            key={index}
            justifyContent="center"
            alignItems="center"
            sx={{
              color: "#777777",
              fontSize: "14px",
            }}
          >
            <span className={houseDetailStyle.iconContainer}>
              <FontAwesomeIcon icon={data.icon} />
            </span>
            <Typography variant="p">{data.title}</Typography>
          </Stack>
        ))}
      </Grid>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={5}
        alignItems={{ xs: "center", lg: "inherit" }}
        padding={{ xs: "10px", sm: "10px 50px", lg: "10px 100px" }}
      >
        <Left />
        <Right />
      </Stack>
    </Box>
  );
};

export default HouseDetail;
