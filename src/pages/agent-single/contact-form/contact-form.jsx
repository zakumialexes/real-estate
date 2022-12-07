import React from "react";
import { Paper, Typography, Grid, Rating, TextField, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Paper sx={{ padding: "25px", marginBottom: "20px" }}>
      <Typography color="text.main" sx={{ mb: 3 }} fontSize="18px" fontWeight="bold">
        Contact Christopher Pakulla
      </Typography>
      <TextField type="text" placeholder="Your Name" margin="dense" fullWidth />
      <TextField type="number" placeholder="Phone" margin="dense" fullWidth />
      <TextField type="email" placeholder="Email" margin="dense" fullWidth />

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
          width: "100%",
        }}
      >
        Send
      </Button>
    </Paper>
  );
};

export default ContactForm;
