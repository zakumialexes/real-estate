import { Grid } from "@mui/material";
import ProfileStyle from "../../dashboard-profile.module.sass";
import { useEffect, useContext, useState } from "react";
import {
  InputTextField,
} from "../../components/input-elements";
import SectionsLayout from "../sections-layout";

const SocialsSection = () => {

  const submitSocials = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <SectionsLayout title="Social Media">
        <form onSubmit={submitSocials}>
          <Grid container spacing={6}>
            {/* Profile Information Socials Upload */}
            {/* Skype */}
            <Grid item md={6}>
              <InputTextField id="skype" type="text" label="Skype" />
            </Grid>
            {/* Website */}
            <Grid item md={6}>
              <InputTextField id="website" type="text" label="Website" />
            </Grid>
            {/* Facebook */}
            <Grid item md={6}>
              <InputTextField id="facebook" type="text" label="Facebook" />
            </Grid>
            {/* Twitter */}
            <Grid item md={6}>
              <InputTextField id="twitter" type="text" label="Twitter" />
            </Grid>
            {/* Linkedin */}
            <Grid item md={6}>
              <InputTextField id="linkedin" type="text" label="Linkedin" />
            </Grid>
            {/* Instagram */}
            <Grid item md={6}>
              <InputTextField id="insta" type="text" label="Instagram" />
            </Grid>
            {/* Youtube */}
            <Grid item md={6}>
              <InputTextField id="yt" type="text" label="Youtube" />
            </Grid>
            {/* Pinterest */}
            <Grid item md={6}>
              <InputTextField id="pinterest" type="text" label="Pinterest" />
            </Grid>
            {/* Update Btn */}
            <Grid item xs={12}>
              <button type="submit" className={ProfileStyle.updateBtn}>Update Profile</button>
            </Grid>
          </Grid>
        </form>
      </SectionsLayout>
    </>
  );
};

export default SocialsSection;
