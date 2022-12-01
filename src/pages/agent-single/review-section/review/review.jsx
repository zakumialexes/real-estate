import { Grid, Box, Typography, Rating } from "@mui/material";
import React from "react";
import ima from "../../house-card/grid-photo-2.jpg";
import ReivewStyle from "./review.module.scss";

const ReviewCard = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          borderBottom: ".1px solid #48484840",
          py: 3,
          ml: 0,
        }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={ima} className={ReivewStyle.reviewUser} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: { xs: "flex-start", sm: "center" }, mb: 1 }}
          >
            <Typography
              variant="h4"
              sx={{ display: "inline-block", mr: 2 }}
              fontSize="15px"
              fontWeight="600"
              color="text.main"
            >
              Alli
            </Typography>
            <Rating name="read-only" value={4.5} readOnly />
          </Box>
          <Typography variant="body1" fontSize="14px" color="text.main" sx={{ mb: 1 }}>
            December 28, 2020
          </Typography>
          <Typography variant="body2" fontSize="14px" color="text.main" sx={{ lineHeight: 1.5 }}>
            Beautiful home, very picturesque and close to everything in jtree! A little warm for a
            hot weekend, but would love to come back during the cooler seasons!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewCard;
