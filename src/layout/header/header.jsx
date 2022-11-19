import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import image from "../../asset/login-bg.jpg";
const Header = ({ title = "Login", img }) => {
  return (
    <Box
      component="section"
      sx={{
        color: "#fff",
        backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    ), url(${img ? img : image})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "bottom", lg: "center" },
        display: "grid",
        alignItems: "end",
      }}
    >
      <Container
        sx={{ paddingY: "60px", paddingX: { xs: "15px", sm: "24px" } }}
      >
        <Grid item xs={6} marginTop="120px">
          <Typography
            fontSize="40px"
            component="h4"
            fontWeight="bold"
            marginBottom="10px"
          >
            {title}
          </Typography>
          {/* breadcrumb */}
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              color: "#fff",
              fontSize: "16px",
            }}
          >
            <Link underline="hover" sx={{ color: "#fff" }} href="/">
              Home
            </Link>

            <Typography fontSize="inherit">{title}</Typography>
          </Breadcrumbs>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
