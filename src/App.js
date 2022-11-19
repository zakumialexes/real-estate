import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./App.css";
import { Banner, Footer, Header, Navbar } from "./layout/layout";
import { Sidebar } from "./layout/navbar/navbar";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const style = {
    marginLeft: "45vw",
    width: "100vw",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    transition: "all .5s",
  };
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const medium = useMediaQuery(theme.breakpoints.down(991));
  useEffect(() => {
    if (!medium) {
      setOpenSidebar(false);
    }
  }, [medium]);
  return (
    <>
      {openSidebar === true && medium ? (
        <Sidebar openSidebar={openSidebar} />
      ) : null}
      <Box
        sx={openSidebar ? { ...style } : null}
        onClick={() => {
          if (openSidebar === true) {
            setOpenSidebar(false);
          }
        }}
      >
        <Navbar
          large={large}
          medium={medium}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Header />
        <Banner />
        <Footer />
      </Box>
    </>
  );
}

export default App;
