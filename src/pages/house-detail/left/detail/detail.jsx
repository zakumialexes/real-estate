import React, { useState } from "react";
import detailStyle from "./detail.module.scss";
import { Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCheck,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  PropertyDetails,
  AddtionalDetails,
  Description,
  Features,
} from "../../data";
import { faFilePdf, faFileWord } from "@fortawesome/free-regular-svg-icons";

const Detail = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="details" className={detailStyle.container}>
        <div className={detailStyle.items}>
          <span>Apartment</span>
          <span>Beds:4</span>
          <span>Baths:2</span>
          <span>SQ ft:5280</span>
        </div>
        <Typography fontSize="18px" fontWeight="bold" mt={3}>
          Description
        </Typography>
        <div className={`${detailStyle.desc} ${show ? detailStyle.show : ""}`}>
          {Description?.map((data, index) => (
            <p key={index}>{data.para}</p>
          ))}
        </div>
        <Stack
          mt={1}
          sx={{ color: "#ff5a5f", cursor: "pointer" }}
          direction="row"
          alignItems="center"
          spacing={1}
          onClick={() => setShow(!show)}
        >
          <span>{show ? "Show Less" : "Show More"}</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`${detailStyle.icon} ${
              show ? detailStyle.iconActive : ""
            }`}
          />
        </Stack>
      </div>
      <div className={detailStyle.container}>
        <Typography fontSize="18px" fontWeight="bold" mb={2}>
          Property Details
        </Typography>
        <div className={detailStyle.propertyDetails}>
          {PropertyDetails?.map((data, index) => (
            <div key={index} className={detailStyle.propertyDetailsItem}>
              <span>{data.item} :</span>{" "}
              <span style={{ fontWeight: "bold" }}>{data.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={detailStyle.container}>
        <Typography fontSize="18px" fontWeight="bold" mb={2}>
          Addtional Details
        </Typography>
        <div className={detailStyle.addtionalDetails}>
          {AddtionalDetails?.map((data, index) => (
            <div key={index} className={detailStyle.addtionalDetailsItem}>
              <span>{data.item} :</span>{" "}
              <span style={{ fontWeight: "bold" }}>{data.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={detailStyle.container}>
        <Typography fontSize="18px" fontWeight="bold" mb={2}>
          Property Attachments
        </Typography>
        <div className={detailStyle.addtionalDetails}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <div className={detailStyle.iconContainer}>
              <FontAwesomeIcon
                icon={faFileWord}
                color="#ff5a5f"
                style={{ fontSize: "30px" }}
              />
            </div>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <FontAwesomeIcon icon={faDownload} color="#ff5a5f" />
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                Demo Word Document
              </span>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <div className={detailStyle.iconContainer}>
              <FontAwesomeIcon
                icon={faFilePdf}
                color="#ff5a5f"
                style={{ fontSize: "30px" }}
              />
            </div>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <FontAwesomeIcon icon={faDownload} color="#ff5a5f" />
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                Demo Pdf Document
              </span>
            </Stack>
          </Stack>
        </div>
      </div>
      <div
        id="features"
        className={detailStyle.container}
        style={{ marginTop: "30px" }}
      >
        <Typography fontSize="18px" fontWeight="bold" mb={2}>
          Features
        </Typography>
        <div className={detailStyle.propertyDetails}>
          {Features?.map((data, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              spacing={2}
              pb={1}
              pt={1}
            >
              <FontAwesomeIcon
                icon={faCheck}
                color="#ff5a5f"
                style={{ fontSize: "20px" }}
              />
              <span>{data.name}</span>
            </Stack>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detail;
