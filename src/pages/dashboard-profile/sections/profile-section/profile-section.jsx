import { Box, Grid, Typography } from "@mui/material";
import ProfileStyle from "../../dashboard-profile.module.sass";
import { useState } from "react";
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

  const submitProfileInformations = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SectionsLayout title="Profile Information">
        <form onSubmit={submitProfileInformations}>
          <Grid container spacing={6}>
            {/* Profile Photo Upload */}
            <Grid item xs={12}>
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
            <Grid item md={6}>
              <InputTextField id="username" type="text" label="User's Name" />
            </Grid>
            {/* Email */}
            <Grid item md={6}>
              <InputTextField id="email" type="email" label="Email" />
            </Grid>
            {/* Name */}
            <Grid item md={6}>
              <InputTextField id="full_name" type="text" label="Full Name" />
            </Grid>
            {/* Position */}
            <Grid item md={6}>
              <InputTextField id="position" type="text" label="Position" />
            </Grid>
            {/* License */}
            <Grid item md={6}>
              <InputTextField id="license" type="text" label="License" />
            </Grid>
            {/* Tax Number */}
            <Grid item md={6}>
              <InputTextField id="tax" type="text" label="Tax Number" />
            </Grid>
            {/* Fax Num */}
            <Grid item md={6}>
              <InputTextField id="fax" type="text" label="Fax Number" />
            </Grid>
            {/* Ph */}
            <Grid item md={6}>
              <InputTextField id="phone" type="text" label="Phone" />
            </Grid>
            {/* language */}
            <Grid item md={6}>
              <InputTextField id="language" type="text" label="Language" />
            </Grid>
            {/* Company Name */}
            <Grid item md={6}>
              <InputTextField id="company_name" type="text" label="Company Name" />
            </Grid>
            {/* Address */}
            <Grid item xs={12}>
              <InputTextField id="address" type="text" label="Address" />
            </Grid>
            {/* About me */}
            <Grid item xs={12}>
              <InputTextAreaField label="About Me" />
            </Grid>
            {/* Update Btn */}
            <Grid item xs={12}>
              <button type="submit" className={ProfileStyle.updateBtn}>
                Update Profile
              </button>
            </Grid>
          </Grid>
        </form>
      </SectionsLayout>
    </>
  );
};

export default ProfileSection;
