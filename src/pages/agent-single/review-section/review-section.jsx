import { Box, Typography, Rating, Grid } from "@mui/material";
import React from "react";
import ReviewFrom from "./review-form/review-form";
import ReviewSStyle from "./review-section.module.scss";
import ReviewCard from "./review/review";

const ReviewSection = () => {
  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          mb: 4,
          justifyContent: "space-between",
          px: 2,
          alignItems: "center",
        }}
      >
        <Box component="div">
          <Typography
            variant="h2"
            sx={{ display: "inline-block", mr: 2 }}
            fontSize="18px"
            fontWeight="bold"
            color="text.main"
          >
            843 Reviews
          </Typography>
          <Rating name="read-only" value={4.5} readOnly />
        </Box>
        <Typography variant="body1" fontSize="14px" color="#ff5a5f">
          Write a Review
        </Typography>
      </Box>

      <Box component="div">
        <ReviewCard />
        <ReviewCard />
      </Box>

      <Box component="div">
        <ReviewFrom />
      </Box>
    </Box>
  );
};

export default ReviewSection;
