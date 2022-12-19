import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProfileStyle from "../../dashboard-profile.module.sass";
import { useEffect, useContext, useState } from "react";
import staticSrc from "../../../../assets/testimonial/testimonialPerson.png";
import PublishIcon from "@mui/icons-material/Publish";
import {
  InputTextAreaField,
  InputTextField,
} from "../../components/input-elements";
import SectionsLayout from "../sections-layout";

const ProfileSection = () => {
  const [photoName, setPhotoName] = useState("");
  const [photoUrl, setPhotoUrl] = useState(staticSrc);

  const changeHandler = (e) => {
    setPhotoName(e.target.files[0].name);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      setPhotoUrl(e.target.result);
    };
  };

  useEffect(() => {}, []);

  return (
    <>
      <SectionsLayout title="Profile Information">
        <form>
          <Grid container spacing={6}>
            {/* Profile Photo Upload */}
            <Grid item xs="12">
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
                  hidden
                  className={ProfileStyle.ppInput}
                  onChange={changeHandler}
                />
                <label htmlFor="pp" className={ProfileStyle.profilePhotoLabel}>
                  <img
                    src={photoUrl}
                    alt="Profile Photo"
                    className={ProfileStyle.profilePhoto}
                  />
                  {photoUrl === staticSrc ? (
                    <div className={ProfileStyle.uploadBtnCon}>
                      <button className={ProfileStyle.uploadBtn}>
                        <PublishIcon
                          sx={{ fontSize: "17px", color: "primary.main" }}
                        />
                        Upload Photo
                      </button>
                    </div>
                  ) : (
                    <div className={ProfileStyle.uploadedTextCon}>
                      <Typography variant="caption" component="p">
                        {photoName}
                      </Typography>
                    </div>
                  )}
                </label>
                <Typography variant="caption" component="p">
                  *minimum 260px x 260px
                </Typography>
              </Box>
            </Grid>

            {/* Profile Information Upload */}
            {/* Username */}
            <Grid item md="6">
              <InputTextField label="User's Name" />
            </Grid>
            {/* Email */}
            <Grid item md="6">
              <InputTextField label="Email" />
            </Grid>
            {/* Name */}
            <Grid item md="6">
              <InputTextField label="Full Name" />
            </Grid>
            {/* Position */}
            <Grid item md="6">
              <InputTextField label="Position" />
            </Grid>
            {/* License */}
            <Grid item md="6">
              <InputTextField label="License" />
            </Grid>
            {/* Tax Number */}
            <Grid item md="6">
              <InputTextField label="Tax Number" />
            </Grid>
            {/* Fax Num */}
            <Grid item md="6">
              <InputTextField label="Fax Number" />
            </Grid>
            {/* Ph */}
            <Grid item md="6">
              <InputTextField label="Phone" />
            </Grid>
            {/* language */}
            <Grid item md="6">
              <InputTextField label="Language" />
            </Grid>
            {/* Company Name */}
            <Grid item md="6">
              <InputTextField label="Company Name" />
            </Grid>
            {/* Address */}
            <Grid item xs="12">
              <InputTextField label="Address" />
            </Grid>
            {/* About me */}
            <Grid item xs="12">
              <InputTextAreaField label="About Me" />
            </Grid>
            {/* Update Btn */}
            <Grid item xs="12">
              <button className={ProfileStyle.updateBtn}>Update Profile</button>
            </Grid>
          </Grid>
        </form>
      </SectionsLayout>
    </>
  );
};

export default ProfileSection;
