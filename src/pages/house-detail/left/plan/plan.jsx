import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import planStyle from "./plan.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Plan = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = ["data", "data"];
  return (
    <>
      <div id="plans" className={planStyle.container}>
        <Typography fontSize="18px" fontWeight="bold" mb={3}>
          Floor plans
        </Typography>
        {data?.map((data, index) => (
          <Box mb={2}>
            <div
              className={planStyle.planContainer}
              onClick={() => toggle(index)}
            >
              <p align="center">
                <b>First Floor </b>
                Size:<b>1267 Sq ft </b>
                Rooms:<b>670 Sq ft </b>
                Baths:<b>530 Sq ft </b>
                Price:<b>1489 Sq ft </b>
              </p>

              <FontAwesomeIcon
                icon={faAngleDown}
                className={`${planStyle.icon} ${
                  selected === index ? planStyle.iconActive : ""
                }`}
              />
            </div>
            <div
              className={`${planStyle.imageContainer} ${
                selected === index ? planStyle.show : ""
              }`}
            >
              <img src="" alt="" />
              <span>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </span>
            </div>
          </Box>
        ))}
      </div>
    </>
  );
};

export default Plan;
