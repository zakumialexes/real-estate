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
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Style from "../navbar/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const settings = [
  "My Profile",
  "Message",
  "Purchase History",
  "Account",
  "Help",
  "Logout",
];
export const DesktopNav = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  sticky,
  dashboard,
  large,
}) => {
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
        <Box sx={{ gap: 1 }} className={Style.center}>
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
        </Box>
      )}

      <Stack
        direction={"row"}
        gap={2}
        alignItems="center"
        sx={dashboard && { ml: "auto" }}
      >
        <Stack direction={"row"} alignItems="center" gap={2} sx={{}}>
          <Link href="">
            <Typography fontSize="16px" color="#484848">
              Contact
            </Typography>
          </Link>

          <span className={Style.divider}></span>

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
            <Link href="login" className={Style.center}>
              <FontAwesomeIcon className={Style.text} icon={faUser} />
              <Typography fontSize="16px" color="#484848" marginLeft={1}>
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
            <FontAwesomeIcon
              className={Style.text}
              style={{ marginRight: "8px" }}
              icon={item.icon}
            />
            <Link sx={{ color: "#484848", fontSize: "16px" }}>{item.link}</Link>
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
    if (window.scrollY > 30) {
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
