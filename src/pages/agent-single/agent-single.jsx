import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AgentLeft from "./left-side/agent-left";
import AgentRight from "./right-side/agent-right";

export default function AgentSingle() {
  return (
    <Box
      sx={{
        maxWidth: { sm: 560, md: 870, lg: 1170 },
        margin: "60px auto",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={8} sx={{ padding: "0 15px" }}>
          <AgentLeft />
        </Grid>
        <Grid item xs={12} md={4} sx={{ padding: "0 15px" }}>
          <AgentRight />
        </Grid>
      </Grid>
    </Box>
  );
}
