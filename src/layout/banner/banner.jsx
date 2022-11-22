import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#ff5a5f", padding: "50px 0", color: "#fff" }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          textAlign: { xs: "center", lg: "start" },
        }}
      >
        <Box sx={{ marginBottom: { xs: "30px", lg: "0" } }}>
          <Typography
            component="h2"
            fontSize="30px"
            fontWeight="bold"
            marginBottom=".5rem"
          >
            Become a Real Estate Agent
          </Typography>
          <Typography fontSize="14px">
            We only work with the best companies around the globe
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              bgcolor: "rgb(255, 120, 124)",
              width: "200px",
              height: "60px",
              color: "#fff",
              borderRadius: 1,
              transition: "all .5s ease-in-out",

              "&:hover": {
                bgcolor: "#fff",
                color: "rgb(255, 120, 124)",
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
