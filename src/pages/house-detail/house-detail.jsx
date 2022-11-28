import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import houseDetailStyle from "./house-detail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconData, navItems } from "./data";
import Left from "./left/left";
import { Link } from "react-scroll";

const HouseDetail = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Box width="100%">
      <div className={houseDetailStyle.nav}>
        {navItems?.map((data, index) => (
          <Link
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
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        px={2}
        spacing={3}
        sx={{ flexWrap: "wrap" }}
      >
        {iconData?.map((data, index) => (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ color: "#777777", fontSize: "14px", margin: "50px 0" }}
          >
            <span className={houseDetailStyle.iconContainer}>
              <FontAwesomeIcon icon={data.icon} />
            </span>
            <Typography variant="p">{data.title}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        padding={{ xs: "10px", sm: "10px 50px", md: "10px 200px" }}
      >
        <Left />
        <div style={{ width: "30%" }}>Right Side</div>
      </Stack>
    </Box>
  );
};

export default HouseDetail;
