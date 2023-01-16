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
import { useNavigate } from "react-router-dom";
import style from "./mobile-dashboard.module.scss";

const links = [
  { id: "", icon: faLayerGroup, to: "#", title: "dashboard" },
  { id: "messages", icon: faEnvelope, to: "#", title: "message" },
  { id: "my-properties", icon: faHome, to: "#", title: "my properties" },
  { id: "my favourites", icon: faHeart, to: "#", title: "my favourites" },
  { id: "my-saved-searchs", icon: faSearch, to: "#", title: "saved search" },
  { id: "my-reviews", icon: faMessage, to: "#", title: "my reviews" },
  { id: "my-packages", icon: faBox, to: "#", title: "my packages" },
  { id: "my-profile", icon: faUser, to: "#", title: "my profile" },
  {
    id: "add-new-listing",
    icon: faBarsStaggered,
    to: "#",
    title: "add new listing",
  },
  { id: "logout", icon: faRightFromBracket, to: "#", title: "logout" },
];

const ListsItem = ({ handleClick, active, id, icon, to = "/", title }) => {
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
  const navigate = useNavigate();

  const [active, setActive] = useState(window.location.pathname.split("/")[2]);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dashboard/" + e.target.id);
    return setActive(e.target.id);
  };

  return (
    <>
      <Container
        component="nav"
        maxWidth="false"
        sx={{
          marginY: "10px",
          p: { xs: 0, lg: 3 },
          position: "relative",
          top: "30px",
          left: "0",
        }}
      >
        <div className={style.dropdownBtn} onClick={handleOpen}>
          <Stack direction="row" alignItems="center" gap={2} height="100%">
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faBars} />
            <Typography fontSize="16px">Dashboard Navigation</Typography>
          </Stack>
        </div>
      </Container>
      <Collapse
        sx={{ marginTop: "60px" }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <Box component="ul" className={style.ul}>
          {links.map((item, i) => (
            <ListsItem
              handleClick={handleClick}
              setActive={setActive}
              active={active}
              key={i}
              {...item}
            />
          ))}
        </Box>
      </Collapse>
    </>
  );
};

export default MobileDashboardNavbar;
