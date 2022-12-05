import {
  faBars,
  faEnvelope,
  faLayerGroup,
  faHeart,
  faHome,
  faMessage,
  faRightFromBracket,
  faSearch,
  faUser,
  faBox,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Collapse, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import style from "./mobile-dashboard.module.scss";

const links = [
  { id: "link-1", icon: faLayerGroup, to: "#", title: "dashboard" },
  { id: "link-2", icon: faEnvelope, to: "#", title: "message" },
  { id: "link-3", icon: faHome, to: "#", title: "my properties" },
  { id: "link-4", icon: faHeart, to: "#", title: "my favourites" },
  { id: "link-5", icon: faSearch, to: "#", title: "saved search" },
  { id: "link-6", icon: faMessage, to: "#", title: "my reviews" },
  { id: "link-7", icon: faBox, to: "#", title: "my packages" },
  { id: "link-8", icon: faUser, to: "#", title: "my profile" },
  { id: "link-9", icon: faBarsStaggered, to: "#", title: "add new listing" },
  { id: "link-10", icon: faRightFromBracket, to: "#", title: "logout" },
];

const ListsItem = ({ id, icon, to = "/", title }) => {
  const [active, setActive] = useState("link-1");
  const handleClick = (e) => {
    e.preventDefault();
    setActive(null);
    setActive(e.target.id);
  };
  console.log("active", active, id);
  return (
    <li>
      <a
        id={id}
        href="#"
        onClick={handleClick}
        className={`${style.linkItem} ${active === id ? style.active : null}`}
      >
        <FontAwesomeIcon icon={icon} />
        {title}
      </a>
    </li>
  );
};

const MobileDashboardNavbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Container
      component="nav"
      maxWidth="false"
      sx={{ marginY: "10px", p: { xs: 0, lg: 3 } }}
    >
      <div className={style.dropdownBtn} onClick={handleOpen}>
        <Stack direction="row" alignItems="center" gap={2} height="100%">
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faBars} />
          <Typography>Dashboard Navigation</Typography>
        </Stack>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box component="ul" className={style.ul}>
          {links.map((item, i) => (
            <ListsItem key={i} {...item} />
          ))}
        </Box>
      </Collapse>
    </Container>
  );
};

export default MobileDashboardNavbar;
