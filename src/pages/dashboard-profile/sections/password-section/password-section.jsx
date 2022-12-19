import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProfileStyle from "../../dashboard-profile.module.sass";
import { useEffect, useContext, useState } from "react";
import {
  InputTextAreaField,
  InputTextField,
} from "../../components/input-elements";
import SectionsLayout from "../sections-layout";

const PasswordSection = () => {
  return (
    <>
      <SectionsLayout title="Change password">
        <form>
          <Grid container spacing={6}>
            {/* Profile Information Password Upload */}
            {/* Old Password */}
            <Grid item md="12">
              <InputTextField label="Old Password" />
            </Grid>
            {/* New Password */}
            <Grid item md="6">
              <InputTextField label="New Password" />
            </Grid>
            {/* Confirm New Password */}
            <Grid item md="6">
              <InputTextField label="Confirm New Password" />
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

export default PasswordSection;
