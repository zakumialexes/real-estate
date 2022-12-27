import React from "react";
import { Box } from "@mui/material";
import { SearchBox, ChatRoom } from "../reuse/reuse";

const AllMessage = ({ chatRooms, activeConservation, searchFeature }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        border: "1px solid rgb(235, 235, 235)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <SearchBox searchFeature={searchFeature} />
      <Box mt={4}>
        {chatRooms.map(
          (chatRoom) =>
            chatRoom.userId != "001" && (
              <ChatRoom activeConservation={activeConservation} chatRooms={chatRoom} />
            )
        )}
      </Box>
    </Box>
  );
};

export default AllMessage;
