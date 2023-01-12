import { Box, Container, Typography } from "@mui/material";
import PasswordSection from "./sections/password-section/password-section";
import ProfileSection from "./sections/profile-section/profile-section";
import SocialsSection from "./sections/socials-section/socials-section";

const DashboardProfile = () => {
  return (
    <>
      <Container
        maxWidth="false"
        disableGutters
        sx={{ bgcolor: "primary.background" }}
      >
        <Box p={{ xs: 2, lg: 5 }}>
          {/* Title */}
          <Box>
            <Typography
              variant="h5"
              fontSize="30px"
              fontWeight="bold"
              style={{ lineHeight: "2.5rem" }}
            >
              My Profile
            </Typography>
            <Typography variant="p" fontSize="14px">
              We are glad to see you again!
            </Typography>
          </Box>

          {/* Update Profile */}
          <ProfileSection />

          {/* Update Socials */}
          <SocialsSection />

          {/* Update Password */}
          <PasswordSection />
        </Box>
      </Container>
    </>
  );
};

export default DashboardProfile;
