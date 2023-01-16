import {
  Avatar,
  Box,
  Button,
  Container,
  // Link,
  Typography,
  Stack,
  List,
  ListItem,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Style from "../navbar/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/service",
    title: "service",
  },
  {
    path: "/blog",
    title: "blog",
  },
  {
    path: "/contact",
    title: "contact",
  },
  [
    {
      path: "/gallery",
      title: "gallery",
    },
    {
      path: "/faq",
      title: "Faq",
    },
    {
      path: "/terms-and-conditions",
      title: "terms and conditions",
    },
  ],
];
const settings = ["My Profile", "Message", "Logout"];
export const DesktopNav = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  sticky,
  dashboard,
  large,
}) => {
  // const [open, setOpen] = useState(false);
  // const handleDropdown = () => {
  //   setOpen((prev) => !prev);
  // };
  // useEffect(() => {
  //   if (anchorElUser !== null) {
  //     setOpen(false);
  //   }
  // }, [anchorElUser]);

  return (
    <Container
      component="header"
      maxWidth={false}
      sx={{
        height: large ? "85px" : "83px",
        top: sticky ? 0 : "-500px",
        position: sticky ? "fixed" : null,
        transition: "all .8s ease-in-out",
        boxShadow: sticky ? "0 5px 25px #00000018" : null,
      }}
      className={Style.navbar}
    >
      {!dashboard && (
        <Link to="/" style={{ gap: "10px" }} className={Style.center}>
          <Avatar
            className={Style.logo}
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
        </Link>
      )}

      <Stack
        direction={"row"}
        gap={2}
        alignItems="center"
        sx={dashboard && { ml: "auto" }}
      >
        <Stack direction={"row"} alignItems="center" gap={2} sx={{}}>
          {navLinks.map((item, i) => {
            if (navLinks.at(-1) === navLinks[i]) {
              return (
                <Box key={i} className={Style.more} sx={{}}>
                  <Typography className={Style.text}>More</Typography>
                  <FontAwesomeIcon
                    className={Style.arrowIcon}
                    style={{ fontSize: "14px" }}
                    icon={faChevronDown}
                  />
                  <Box className={Style.dropdown}>
                    {navLinks[i].map((item, i) => (
                      <Link to={item.path} key={i}>
                        <Typography className={Style.text}>
                          {item.title}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                  <span className={Style.arrow} />
                </Box>
              );
            } else {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? Style.active : undefined
                  }
                  key={i}
                  to={item.path}
                >
                  <Typography className={Style.text}>{item.title}</Typography>
                </NavLink>
              );
            }
          })}

          <span className={Style.divider} />

          {dashboard ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ width: "35px", height: "35px" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: "45px",
                  "& .MuiMenu-paper": {
                    width: !large ? "250px" : "300px",
                    top: "30px",
                    minHeight: "250px",
                    padding: "20px 30px",
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box sx={{ mb: "20px", display: "flex", gap: 2 }}>
                  <Avatar
                    sx={{ borderRadius: "2px" }}
                    src="https://loremflickr.com/320/240"
                  />
                  <Box>
                    <Typography className={Style.text}> Ali Tufan</Typography>
                    <Typography className={Style.text}>
                      alitufan@gmail.com
                    </Typography>
                  </Box>
                </Box>
                {settings.map((setting) => (
                  <MenuItem
                    className={Style.menuItem}
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Link to="login" className={Style.center}>
              <FontAwesomeIcon className={Style.text} icon={faUser} />
              <Typography className={Style.text} marginLeft={1}>
                Login/Register
              </Typography>
            </Link>
          )}
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
  const [moreMenu, setMoreMenu] = useState(false);
  const openMoreMenu = () => {
    setMoreMenu(true);
  };
  const closeMoreMenu = () => {
    setMoreMenu(false);
  };
  return (
    <Box
      sx={{
        width: openSidebar ? "65vw" : "0",
      }}
      className={Style.sidebar}
    >
      <Box className={Style.sidebarTopMenu}>
        {moreMenu && (
          <FontAwesomeIcon
            onClick={closeMoreMenu}
            icon={faChevronLeft}
            className={Style.backArrow}
          />
        )}
        <Typography>Menu</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          transform: moreMenu ? "translateX(-100%)" : "translateX(0)",
          transition: "all .5s ease",
        }}
      >
        <List>
          {navLinks.map((item, i) => {
            if (navLinks.at(-1) === navLinks[i]) {
              return (
                <>
                  <ListItem
                    onClick={openMoreMenu}
                    key={i}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <p style={{ paddingLeft: "6px" }}>More</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </ListItem>
                </>
              );
            } else {
              return (
                <ListItem key={i} className={Style.listItems}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? Style.active : undefined
                    }
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </ListItem>
              );
            }
          })}
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
      <Box className={Style.sidebarMore} sx={{ left: moreMenu ? "0" : "100%" }}>
        {navLinks.at(-1).map((item, i) => (
          <ListItem key={i} className={Style.listItems}>
            <NavLink
              className={({ isActive }) =>
                isActive ? Style.active : undefined
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          </ListItem>
        ))}
      </Box>
    </Box>
  );
};

const MobileNav = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  setOpenSidebar,
  openSidebar,
  dashboard,
}) => {
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
          {!dashboard && (
            <div className={Style.line} onClick={handleSideBar}>
              <span className={Style.line1} />
              <span className={Style.line2} />
              <span className={Style.line3} />
            </div>
          )}

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
            <Typography component="h2" fontWeight="bold" fontSize="24px">
              Shwe Real Estate
            </Typography>
          </Stack>
          <Box>
            {dashboard ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{ width: "35px", height: "35px" }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: "45px",
                    "& .MuiMenu-paper": {
                      width: "250px",
                      top: "30px",
                      minHeight: "250px",
                      padding: "20px 30px",
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Box sx={{ mb: "20px", display: "flex", gap: 2 }}>
                    <Avatar
                      sx={{ borderRadius: "2px" }}
                      src="https://loremflickr.com/320/240"
                    />
                    <Box>
                      <Typography className={Style.text}> Ali Tufan</Typography>
                      <Typography className={Style.text}>
                        alitufan@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  {settings.map((setting) => (
                    <MenuItem
                      className={Style.menuItem}
                      key={setting}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </Box>
        </Stack>
      </Container>
    </>
  );
};

const Navbar = ({ dashboard, openSidebar, setOpenSidebar, large, medium }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [sticky, setSticky] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 85) {
      return setSticky(true);
    } else {
      return setSticky(false);
    }
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => window.removeEventListener("scroll", onNavScroll);
  }, []);

  return !medium ? (
    <DesktopNav
      anchorElUser={anchorElUser}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      sticky={sticky}
      large={large}
      dashboard={dashboard}
    />
  ) : (
    <MobileNav
      anchorElUser={anchorElUser}
      dashboard={dashboard}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    />
  );
};

export default Navbar;
