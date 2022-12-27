import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  styled,
  IconButton,
  Grid,
  Avatar,
  Input,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "../../agent-single/house-card/grid-photo-2.jpg";

import reuseStyle from "./reuse.module.scss";

export const Title = ({ title }) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bolder" mb={3}>
        {title}
      </Typography>
      <Typography variant="body2" fontSize="16px">
        We glad to see you again!
      </Typography>
    </Box>
  );
};

export const CustomTextField = styled(TextField)({
  width: "100%",
  "& fieldset": {
    border: "1px solid rgb(235, 235, 235) !important",
    borderRadius: "8px",
    color: "#484848",
    fontSize: "14px",
    paddingLeft: "20px",
  },
});

export const SearchBox = ({ searchFeature }) => {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const onChangeHandler = (e) => {
    searchFeature(e.target.value);
  };
  return (
    <CustomTextField
      placeholder="Search"
      onChange={(e) => onChangeHandler(e)}
      InputProps={{
        endAdornment: (
          <IconButton size="small">
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
        ),
      }}
    />
  );
};

export const ChatRoom = ({ chatRooms, activeConservation }) => {
  return (
    <Grid
      onClick={() => activeConservation(chatRooms.chatRoom.id)}
      container
      spacing={2}
      mb={3}
      ml={0}
      sx={{
        "& .MuiGrid-item": { paddingTop: 0 },
        "&:hover": { background: "#f7f7f7" },
      }}
      className={reuseStyle.chatroom}
      alignItems="center"
    >
      <Grid item xs={10} display="flex" alignItems="center">
        <Box position="relative">
          <Box className={reuseStyle.active}></Box>
          <Avatar src={chatRooms.image} sx={{ width: 55, height: 55 }} />
        </Box>
        <Box ml={2}>
          <Typography variant="h5" mb={1} fontSize="18px" fontWeight="bolder">
            {chatRooms.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgb(127, 127, 127)" }}>
            {chatRooms.sendUserId == "001" && <span>You :</span>}
            {chatRooms.chatRoom.messages[chatRooms.chatRoom.messages.length - 1].message}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box className={reuseStyle.bradge}>
          <span>2</span>
        </Box>
      </Grid>
    </Grid>
  );
};

export const Message = ({ msg, userId }) => {
  const position = userId == msg.sendUserId ? "flex-end" : "flex-start";
  console.log({ msg, position });
  return (
    <Box display="flex" alignItems="center" sx={{ marginBottom: "25px", justifyContent: position }}>
      {userId != msg.sendUserId && (
        <Box mr={3}>
          <Avatar src={msg.image} sx={{ width: 65, height: 65 }} />
        </Box>
      )}
      <Box>
        <Typography variant="body2" mb={1}>
          Today, 10:31
        </Typography>
        <Box className={reuseStyle.message}>{msg.message}</Box>
      </Box>
    </Box>
  );
};

export const WriteMessage = ({ sendData, userId }) => {
  const [message, setMessage] = useState("");
  const onClickHandler = () => {
    sendData({ sendUserId: userId, date: "7 August 2019", message: message });
    setMessage("");
  };
  return (
    <Box>
      <Input
        placeholder="Write Message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <Button
        color="error"
        sx={{ padding: "20px" }}
        variant="contained"
        onClick={() => onClickHandler()}
      >
        Send Message
      </Button>
    </Box>
  );
};
