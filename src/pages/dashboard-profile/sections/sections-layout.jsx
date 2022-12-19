import { Grid, Typography } from "@mui/material";

const SectionsLayout = (props) => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#fff",
          border: "1px solid rgb(235, 235, 235)",
          borderRadius: "10px",
          marginBottom: "30px",
          padding: "30px",
        }}
      >
        <Grid item md="2">
          <Typography variant="h4" fontSize="18px" fontWeight="bold">
            {props.title}
          </Typography>
        </Grid>
        <Grid item md="10">
            {props.children}
        </Grid>
      </Grid>
    </>
  );
};

export default SectionsLayout;
