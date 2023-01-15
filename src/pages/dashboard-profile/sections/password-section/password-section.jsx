import { Grid } from "@mui/material";
import ProfileStyle from "../../dashboard-profile.module.sass";
import { useEffect, useContext, useState } from "react";
import {
  InputTextField,
} from "../../components/input-elements";
import SectionsLayout from "../sections-layout";

const PasswordSection = () => {

  const submitPassword = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <SectionsLayout title="Change password">
        <form onSubmit={submitPassword}>
          <Grid container spacing={6}>
            {/* Profile Information Password Upload */}
            {/* Old Password */}
            <Grid item md={12}>
              <InputTextField id="old_psw" type="password" label="Old Password" />
            </Grid>
            {/* New Password */}
            <Grid item md={6}>
              <InputTextField id="new_psw" type="password" label="New Password" />
            </Grid>
            {/* Confirm New Password */}
            <Grid item md={6}>
              <InputTextField id="confirm_psw" type="password" label="Confirm New Password" />
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

export default PasswordSection;
