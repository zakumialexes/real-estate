import { Box, Container, Grid, Typography } from "@mui/material";
import ProfileStyle from "./dashboard-profile.module.sass";
import {dataAdapter, Context} from "../../utils/utils";
import { useEffect, useContext } from "react";

const DashboardProfile = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    // const data = dataAdapter({type: "get", url: "/dashboard"});
    // console.log(data)
    console.log(state)
    // console.log(dispatch)
    const data = dispatch({type:"get", url: "/dashboard"});
    console.log(data)
  }, [])

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
          <Grid
            container
            sx={{
              bgcolor: "primary.white",
              border: "1px solid rgb(235, 235, 235)",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Grid item md="2">
              <Typography variant="h4" fontSize="18px" fontWeight="bold">
                Profile Information
              </Typography>
            </Grid>
            <Grid item md="10">
              <Grid container>
                <Grid item xs="12">
                  <form>
                    {/* Profile Photo Upload */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <input
                        type="file"
                        name="profile_photo"
                        id="pp"
                        accept=".gif, .jpg, .png"
                        aria-label="profile-photo-input"
                        className={ProfileStyle.ppInput}
                      />
                      <label htmlFor="pp" className={ProfileStyle.profilePhoto}>
                        <div>
                          <img src="" alt="" />
                        </div>
                        <div>
                          <div>Upload Photo</div>
                        </div>
                      </label>
                    </Box>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DashboardProfile;
