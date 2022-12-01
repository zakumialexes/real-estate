import { Stack, Typography } from "@mui/material";
import React from "react";
import locationStyle from "./location.module.scss";

const Location = () => {
  return (
    <div id="location" className={locationStyle.container}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        mb={2}
      >
        <Typography fontSize="18px" fontWeight="bold">
          Location
        </Typography>
        <p>1421 San Pedro St, Los Angeles, CA 90015</p>
      </Stack>
      <div style={{ maxHeight: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.4410896233576!2d-118.25738632554821!3d34.0325547731644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7d2efe13419%3A0xa52dbd5da72cc80f!2s1401-1421%20San%20Pedro%20St%2C%20Los%20Angeles%2C%20CA%2090015%2C%20USA!5e0!3m2!1sen!2smm!4v1669651599408!5m2!1sen!2smm"
          width="100%"
          height="400px"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
