import React from "react";
import { Avatar, Box, Button, Input, Typography } from "@mui/material";

import Ima from "../../agent-single/house-card/grid-photo-2.jpg";
import { Message, WriteMessage } from "../reuse/reuse";
const styleRule = {
  position: "absolute",
  right: "0",
  left: "0",
  height: "0.1px",
};
const UserMessage = ({ conservationRoom, insertNewMessage }) => {
  const userId = "001";
  const sendData = (data) => {
    const cloneConservationRoomData = { ...conservationRoom };
    cloneConservationRoomData.chatRoom.messages = [
      ...cloneConservationRoomData.chatRoom.messages,
      data,
    ];
    insertNewMessage(cloneConservationRoomData);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        border: "1px solid rgb(235, 235, 235)",
        borderRadius: "8px",
        padding: "20px",
        position: "relative",
      }}
    >
      {conservationRoom.chatRoom.length == 0 ? (
        <Typography> Please Select Chat Rooms</Typography>
      ) : (
        <Box>
          <Box display="flex" alignItems="center" my={2}>
            <Box mr={2}>
              <Avatar src={conservationRoom.image} sx={{ width: 70, height: 70 }} />
            </Box>
            <Box>
              <Typography fontSize="20px" mb={1} fontWeight="bolder">
                {conservationRoom.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "rgb(127, 127, 127)" }}>
                was online today at 11:43
              </Typography>
            </Box>
          </Box>
          <hr style={styleRule} />

          <Box my={5}>
            {conservationRoom.chatRoom.messages.map((msg) => (
              <Message msg={msg} userId={userId} />
            ))}
          </Box>

          <WriteMessage sendData={sendData} userId={userId} />
        </Box>
      )}
    </Box>
  );
};

export default UserMessage;
