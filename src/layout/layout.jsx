import { useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { default as Navbar, Sidebar } from "./navbar/navbar"
import { default as Footer } from "./footer/footer"
import { default as Header } from "./header/header"
import { default as Banner } from "./banner/banner"

export const Layout = ({ children }) => {
    const [authenicated, setAuthenticated] = useState(false)
    const [openSideBar, setOpenSideBar] = useState(false)
    const style = {
        marginLeft: "65vw",
        width: "100vw",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "all .5s ease",
    }
    const theme = useTheme()
    const large = useMediaQuery(theme.breakpoints.up("lg"))
    const medium = useMediaQuery(theme.breakpoints.down(991))
    useEffect(() => {
        if (!medium) {
            setOpenSideBar(false)
        }
    }, [medium])
    const NavImageNotIncludedPages = ["home", "house-detail"]
    return (
        <>
            {medium ? <Sidebar openSidebar={openSideBar} /> : null}
            <Box
                sx={openSideBar ? { ...style } : null}
                onClick={() => {
                    if (openSideBar === true) {
                        setOpenSideBar(false)
                    }
                }}
            >
                <Navbar large={large} medium={medium} openSidebar={openSideBar} setOpenSidebar={setOpenSideBar} />

                {NavImageNotIncludedPages.some((page) => window.location.href.includes(page)) ? "" : <Header />}
                {children}
                {authenicated ? <Banner /> : ""}
                <Footer />
            </Box>
        </>
    )
}
