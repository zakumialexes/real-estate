import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import faqStyles from "./faq.module.scss";
import { data } from "./faqData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <Typography color="#484848" align="center" marginY={5} variant="h4">
        Frequently Asked Questions
      </Typography>
      <div className={faqStyles.container}>
        {data?.map((item, index) => (
          <Stack key={index} spacing={2} mb={1} alignContent="flex-start">
            <div
              className={`${faqStyles.question} ${
                selected === index ? faqStyles.active : ""
              }`}
              onClick={() => toggle(index)}
            >
              <div>{item.Q}</div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`${faqStyles.icon} ${
                  selected === index ? faqStyles.iconActive : ""
                }`}
              />
            </div>
            <div
              className={`${faqStyles.answer} ${
                selected === index ? faqStyles.show : ""
              }`}
            >
              {item.A}
            </div>
          </Stack>
        ))}
      </div>
    </>
  );
};

export default Faq;
