import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
const Header = ({ img }) => {
  const urlFirstBreadCrumbs = window.location.pathname
    .split("/")[1]
    .split("-")
    .join(" ");
  const urlRestOfBreadCrumbs = window.location.pathname.split("/").slice(2);
  return (
    <Box
      component="section"
      sx={{
        color: "#fff",
        backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    ), url(${img ? img : "/asset/login-bg.jpg"})`,
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
            marginBottom="20px"
            textTransform="capitalize"
          >
            {window.location.pathname !== "/" ? urlFirstBreadCrumbs : "Home"}
          </Typography>
          {/* breadcrumb */}
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              color: "#fff",
              fontSize: "16px",
            }}
          >
            <Link underline="hover" sx={{ color: "#fff !important" }} href="/">
              Home
            </Link>

            {window.location.pathname !== "/" && (
              <Typography fontSize="inherit" textTransform="capitalize">
                {urlFirstBreadCrumbs}
              </Typography>
            )}
            {urlRestOfBreadCrumbs.map((breadcrumb, index) => (
              <Typography
                fontSize="inherit"
                textTransform="capitalize"
                key={index}
              >
                {breadcrumb}
              </Typography>
            ))}
          </Breadcrumbs>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
