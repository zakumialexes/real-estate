import { Container, Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AllMessage from "./all-message/all-message";
import { Title } from "./reuse/reuse";
import UserMessage from "./user-message/user-message";
import api from "../my-properties/api";

const Message = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [conservationRoom, setConservationRoom] = useState({ chatRoom: [] });
  useEffect(() => {
    api.get("/messages").then(({ data }) => setChatRooms(data));
  }, []);

  const activeConservation = (id) => {
    var setConservationData = chatRooms.filter((data) => data.chatRoom && data.chatRoom.id == id);
    console.log({ setConservationData });

    setConservationRoom(...setConservationData);
  };

  return (
    <Box
      sx={{
        paddingY: "60px",
        paddingX: { xs: "15px", md: "60px" },
        background: "#f7f7f7",
      }}
    >
      <Title title="Message" />
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} lg={5}>
          <AllMessage chatRooms={chatRooms} activeConservation={activeConservation} />
        </Grid>
        <Grid item xs={12} lg={7}>
          <UserMessage conservationRoom={conservationRoom} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Message;
