import React from "react";
import { Typography, Grid, Rating, TextField, Button, Box } from "@mui/material";

const ReviewFrom = () => {
  return (
    <Box sx={{ padding: "25px", marginTop: "20px" }}>
      <Typography color="text.main" fontWeight="bold">
        Write a Review
      </Typography>
      <Grid display="inline-grid" gridTemplateColumns="max-content max-content" margin="30px 0">
        <Rating name="read-only3" value={4} precision={0.5} />
        <Typography
          display="inline-flex"
          alignItems="center"
          fontWeight="350"
          fontSize="14px"
          color="text.main"
          marginLeft="30px"
        >
          Your Rating & Review
        </Typography>
      </Grid>
      <TextField type="text" placeholder="Review Tittle" fullWidth />
      <TextField
        fullWidth
        sx={{
          marginTop: "20px",
          height: "200px",
        }}
        inputProps={{ style: { height: "100%" } }}
        placeholder="Your Review"
        multiline
        rows={6}
      />
      <Button
        color="reviewSubmitButton"
        variant="contained"
        sx={{
          boxShadow: "none",
          borderRadius: "8px",
          padding: { xs: "10px", sm: "15px" },
          border: "2px solid #ff5a5f",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#ff5a5f",
            boxShadow: "none",
          },
        }}
      >
        Submit Review
      </Button>
    </Box>
  );
};

export default ReviewFrom;
