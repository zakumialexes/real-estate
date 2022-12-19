import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProfileStyle from "../../dashboard-profile.module.sass";
import { useEffect, useContext, useState } from "react";
import {
  InputTextAreaField,
  InputTextField,
} from "../../components/input-elements";
import SectionsLayout from "../sections-layout";

const SocialsSection = () => {
  return (
    <>
      <SectionsLayout title="Social Media">
        <form>
          <Grid container spacing={6}>
            {/* Profile Information Socials Upload */}
            {/* Skype */}
            <Grid item md="6">
              <InputTextField label="Skype" />
            </Grid>
            {/* Website */}
            <Grid item md="6">
              <InputTextField label="Website" />
            </Grid>
            {/* Facebook */}
            <Grid item md="6">
              <InputTextField label="Facebook" />
            </Grid>
            {/* Twitter */}
            <Grid item md="6">
              <InputTextField label="Twitter" />
            </Grid>
            {/* Linkedin */}
            <Grid item md="6">
              <InputTextField label="Linkedin" />
            </Grid>
            {/* Instagram */}
            <Grid item md="6">
              <InputTextField label="Instagram" />
            </Grid>
            {/* Youtube */}
            <Grid item md="6">
              <InputTextField label="Youtube" />
            </Grid>
            {/* Pinterest */}
            <Grid item md="6">
              <InputTextField label="Pinterest" />
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

export default SocialsSection;
