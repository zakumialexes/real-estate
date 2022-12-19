import { useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState, useContext } from "react"
import { default as Navbar, Sidebar } from "./navbar/navbar"
import { default as Footer } from "./footer/footer"
import { default as Header } from "./header/header"
import { default as Banner } from "./banner/banner"
import { Context } from "../utils/utils"
import DashboardSidebar from "./dashboard/dashboard-sidebar"
import MobileDashboardNavbar from "./dashboard/mobile-dashboard-navbar"
import Copyright from "./copyright/copyright"

const style = {
    marginLeft: "65vw",
    width: "100vw",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    transition: "all .5s ease",
}
export const Layout = ({ children }) => {
    const context = useContext(Context)
    const [openSideBar, setOpenSideBar] = useState(false)
    const theme = useTheme()
    const medium = useMediaQuery(theme.breakpoints.down(991))
    const large = useMediaQuery(theme.breakpoints.up("lg"))
    useEffect(() => {
        if (!medium) {
            setOpenSideBar(false)
        }
    }, [medium])
    const NavImageNotIncludedPages = ["home", "houses/"]
    return (
        <>
            {medium ? <Sidebar openSidebar={openSideBar} /> : null}
            <Navbar large={large} medium={medium} openSidebar={openSideBar} setOpenSidebar={setOpenSideBar} />
            <Box
                sx={openSideBar ? { ...style } : null}
                onClick={() => {
                    if (openSideBar === true) {
                        setOpenSideBar(false)
                    }
                }}
            >
                {!NavImageNotIncludedPages.some((page) => window.location.pathname.includes(page)) &&
                    window.location.pathname !== "/" && <Header />}
                {children}

                <Banner />
                <Footer />
            </Box>
        </>
    )
}
const ContentBox = ({ medium, children }) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                p: medium ? "90px 20px" : "30px 20px",
                ml: !medium ? "25%" : "0",
            }}
        >
            {children}

            <Copyright />
        </Box>
    )
}
export const DashBoardLayout = ({ children }) => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const theme = useTheme()
    const medium = useMediaQuery(theme.breakpoints.down(991))
    const large = useMediaQuery(theme.breakpoints.up("lg"))
    return (
        <Box
            sx={openSideBar ? { ...style } : null}
            onClick={() => {
                if (openSideBar === true) {
                    setOpenSideBar(false)
                }
            }}
        >
            <Navbar dashboard={true} large={large} medium={medium} />
            {!medium && <DashboardSidebar />}
            <ContentBox medium={medium}>
                {medium && <MobileDashboardNavbar />}
                {children}
            </ContentBox>
        </Box>
    )
}
