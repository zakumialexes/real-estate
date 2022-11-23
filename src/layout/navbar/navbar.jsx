import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Typography,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Style from "../navbar/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = ({ large }) => {
  const [sticky, setSticky] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <Container
      component="header"
      maxWidth={false}
      className={Style.navbar}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        height: "83px",
        top: 0,
        left: 0,
        position: sticky ? "fixed" : null,
      }}
    >
      <Box sx={{ gap: 1 }} className={Style.center}>
        <Avatar
          sx={{
            height: "auto",
            maxWidth: "100%",
            borderRadius: "0",
            marginBottom: "10px",
          }}
          src={"asset/header-logo2.png"}
          alt=""
        />
        <Typography
          component="h2"
          fontWeight="bold"
          fontSize="28px"
          color="#484848"
        >
          Shwe Real Estate
        </Typography>
      </Box>
      {/* <Box sx={{ flex: 2, display: "flex", justifyContent: "end" }}>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            fontSize: "16px",
            cursor: "pointer",
            gap: 3,
            marginX: "16px",
          }}
        >
          {links.map((link, i) => (
            <ListItem
              disableGutters
              key={i}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                "& svg": { height: ".6em" },
              }}
            >
              <Link>{link}</Link>
              <FontAwesomeIcon icon={faChevronDown} />
            </ListItem>
          ))}
        </List>
      </Box> */}

      <Stack direction={"row"} gap={2} alignItems="center">
        <Stack direction={"row"} alignItems="center" gap={2} sx={{}}>
          <Link href="">
            <Typography>Contact</Typography>
          </Link>
          <span className={Style.divider}></span>

          <Link href="login" className={Style.center}>
            <FontAwesomeIcon icon={faUser} />
            <Typography marginLeft={1}>Login/Register</Typography>
          </Link>
        </Stack>
        <Button
          sx={{
            width: { xs: "100px", lg: "180px" },
            paddingY: "8px",
          }}
          className={`${Style.btn} ${Style.center}`}
        >
          <FontAwesomeIcon icon={faPlus} />
          <Typography fontSize="16px" marginLeft={"4px"}>
            {large ? "Create Listing" : null}
          </Typography>
        </Button>
      </Stack>
    </Container>
  );
};
export const Sidebar = ({ openSidebar }) => {
  const navlinks = [
    { icon: "", link: "contact" },
    { icon: faUser, link: "login" },
    { icon: faPenToSquare, link: "register" },
  ];
  return (
    <Box
      sx={{
        position: "fixed",
        width: openSidebar ? "65vw" : "0",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: "1111",
        bgcolor: "#f7f7f7",
        transition: "all .5s ease",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "85px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <Typography>Menu</Typography>
      </Box>
      <List sx={{}}>
        {navlinks.map((item, i) => (
          <ListItem
            key={i}
            sx={{
              borderBottom: "1px solid #00000019",
              textTransform: "capitalize",
              padding: "11px 10px 11px 20px",
            }}
          >
            <FontAwesomeIcon style={{ marginRight: "8px" }} icon={item.icon} />
            <Link>{item.link}</Link>
          </ListItem>
        ))}
      </List>
      <Stack alignItems="center">
        <Button
          className={`${Style.btn} ${Style.center}`}
          sx={{
            width: "max(90%, 200px)",
            marginTop: "20px",
            paddingY: "15px",
            height: "50px",
            whiteSpace: "nowrap",
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          <Typography fontSize="16px" marginLeft={"4px"}>
            Create Listing
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

const MobileNav = ({ setOpenSidebar, openSidebar }) => {
  const handleSideBar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <Container
        maxWidth={false}
        component="header"
        sx={{
          height: "85px",
          bgcolor: "#fff",
          zIndex: "1100",
          position: "fixed",
          transition: "all .5s ease",
          top: 0,
          left: openSidebar ? "65vw" : 0,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <div className={Style.line} onClick={handleSideBar}>
            <span className={Style.line1} />
            <span className={Style.line2} />
            <span className={Style.line3} />
          </div>
          <Stack direction="row" alignItems="center" gap={1}>
            <Avatar
              sx={{
                height: "auto",
                maxWidth: "100%",
                borderRadius: "0",
                marginBottom: "10px",
              }}
              src={"asset/header-logo2.png"}
              alt=""
            />
            <Typography component="h2" fontWeight="bold" fontSize="28px">
              Shwe Real Estate
            </Typography>
          </Stack>
          <Box>
            <FontAwesomeIcon icon={faUser} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

const Navbar = ({ openSidebar, setOpenSidebar, large, medium }) => {
  return !medium ? (
    <DesktopNav large={large} />
  ) : (
    <MobileNav openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
  );
};

export default Navbar;
