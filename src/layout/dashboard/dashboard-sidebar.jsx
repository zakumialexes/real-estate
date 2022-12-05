import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Collapse, Link, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "./dashboard-sidebar.module.scss";
import {
  faBox,
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faHeart,
  faHome,
  faLayerGroup,
  faMessage,
  faRightFromBracket,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const NestedList = ({ id, icon = "", selected, handleOpen, children }) => {
  return (
    <ListItem
      component="div"
      className={`${style.listItem} ${
        selected === id ? `${style.active}` : null
      }`}
      sx={{ flexDirection: "column" }}
      disablePadding
      onClick={() => handleOpen(id)}
    >
      <Link className={style.menuItem}>
        <FontAwesomeIcon icon={icon} />
        <Typography>My Properties</Typography>
        <FontAwesomeIcon
          className={style.arrowDown}
          icon={selected === id ? faChevronUp : faChevronDown}
        />
      </Link>
      <Collapse
        sx={{
          width: "100%",
          padding: "5px 0",
        }}
        in={selected === id ? true : false}
        timeout="auto"
        unmountOnExit
      >
        {children}
      </Collapse>
    </ListItem>
  );
};

const NestedListItem = ({ title, to }) => {
  return (
    <ListItem disablePadding sx={{ marginBottom: "15px", display: "block" }}>
      <Link className={style.nestedList} to={to}>
        <Typography component="h6" className={style.nestedItem} fontSize="14px">
          {title}
        </Typography>
      </Link>
    </ListItem>
  );
};
const ListComponent = ({ id, title, icon, to = "#" }) => {
  const [select, setSelect] = useState("dashboard");
  const handleActive = (e) => {
    setSelect(e.target.id);
  };
  return (
    <ListItem
      disablePadding
      className={`${style.listItem} ${select === id ? style.active : ""}`}
      onClick={handleActive}
    >
      <Link className={style.menuItem} id={id}>
        <FontAwesomeIcon icon={icon} />
        <Typography>{title}</Typography>
      </Link>
    </ListItem>
  );
};
const ListTitle = ({ title }) => {
  return (
    <ListItem className={style.menuTitle}>
      <p>{title}</p>
    </ListItem>
  );
};

const DashboardSidebar = () => {
  const [selected, setSelected] = useState(null);

  const handleOpen = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <Box className={style.sidebar}>
      <Box component="header" className={style.header}>
        <img src="asset/header-logo2.png" alt="" />
        <Typography>Shwe Real Estate</Typography>
      </Box>
      <Box component="ul" className={style.ul}>
        <ListTitle title="Main" />
        {/* 1 main*/}
        <ListComponent id="dashboard" title="Dashboard" icon={faLayerGroup} />
        <ListComponent id="message" title="Message" icon={faEnvelope} />
        {/* 2 main */}

        {/* 3 main */}
        <ListTitle title="Manage Listing" />
        <NestedList
          title="My Properties"
          id="my-property"
          icon={faHome}
          selected={selected}
          handleOpen={handleOpen}
        >
          <NestedListItem title="dashboard" />
        </NestedList>
        <ListComponent title="My Favourite" icon={faHeart} />
        <ListComponent title="Saved Search" icon={faSearch} />
        <NestedList
          icon={faMessage}
          id="review"
          selected={selected}
          handleOpen={handleOpen}
        >
          <NestedListItem title="My Review" />
          <NestedListItem title="Visitor Review" />
        </NestedList>
        {/* 4 main */}
        <ListTitle title="Manage Account" />
        <ListComponent title="My Package" icon={faBox} />
        <ListComponent title="My Profile" icon={faUser} />
        <ListComponent title="Logout" icon={faRightFromBracket} />
        {/* 5main */}
      </Box>
    </Box>
  );
};

export default DashboardSidebar;
