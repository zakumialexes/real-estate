import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Collapse, Link, ListItem, Typography } from "@mui/material"
import React, { useState } from "react"
import style from "./dashboard-sidebar.module.scss"
import { useNavigate } from "react-router-dom"
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
} from "@fortawesome/free-solid-svg-icons"
const NestedList = ({ select, handleActive, id, icon = "", selected, handleOpen, children }) => {
    return (
        <ListItem
            component="div"
            className={`${style.listItem} ${select === id ? `${style.active}` : null}`}
            sx={{ flexDirection: "column" }}
            disablePadding
            onClick={() => handleOpen(id)}
        >
            <Link className={style.menuItem}>
                <FontAwesomeIcon icon={icon} />
                <Typography>My Properties</Typography>
                <FontAwesomeIcon className={style.arrowDown} icon={select === id ? faChevronUp : faChevronDown} />
            </Link>
            <Collapse
                sx={{
                    width: "100%",
                    padding: "5px 0",
                }}
                in={select === id ? true : false}
                timeout="auto"
                unmountOnExit
            >
                {children}
            </Collapse>
        </ListItem>
    )
}

const NestedListItem = ({ title, to }) => {
    return (
        <ListItem disablePadding sx={{ marginBottom: "15px", display: "block" }}>
            <Link className={style.nestedList} to={to}>
                <Typography component="h6" className={style.nestedItem} fontSize="14px">
                    {title}
                </Typography>
            </Link>
        </ListItem>
    )
}
const ListComponent = ({ select, handleActive, id, title, icon, to = "#" }) => {
    return (
        <ListItem disablePadding className={`${style.listItem} ${select === id ? style.active : null}`}>
            <Link className={style.menuItem} id={id} onClick={handleActive}>
                <FontAwesomeIcon icon={icon} />
                <Typography>{title}</Typography>
            </Link>
        </ListItem>
    )
}
const ListTitle = ({ title }) => {
    return (
        <ListItem className={style.menuTitle}>
            <p>{title}</p>
        </ListItem>
    )
}

const DashboardSidebar = () => {
    const [select, setValue] = useState(window.location.pathname.split("/")[2])
    const navigate = useNavigate()
    const setSelect = (value) => {
        setValue(value)
        navigate("/dashboard/" + value)
    }
    const handleActive = (e) => {
        setSelect(e.target.id)
    }
    const handleOpen = (id) => {
        if (select === id) {
            return setSelect(null)
        }
        setSelect(id)
    }

    return (
        <Box className={style.sidebar}>
            <Box component="header" className={style.header}>
                <img className={style.logo} src="asset/header-logo2.png" alt="" />
                <Typography fontSize="20px">Shwe Real Estate</Typography>
            </Box>
            <Box component="ul" className={style.ul}>
                <ListTitle title="Main" />
                {/* 1 main*/}
                <ListComponent
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    to={select}
                    id=""
                    title="Dashboard"
                    icon={faLayerGroup}
                />
                <ListComponent
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    id="message"
                    title="Message"
                    icon={faEnvelope}
                />
                {/* 2 main */}

                {/* 3 main */}
                <ListTitle title="Manage Listing" />
                <NestedList
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    title="My Properties"
                    id="my-properties"
                    icon={faHome}
                    handleOpen={handleOpen}
                >
                    <NestedListItem title="dashboard" />
                </NestedList>
                <ListComponent
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    id="my-favourites"
                    title="My Favourite"
                    icon={faHeart}
                />
                <ListComponent
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    id="search"
                    title="Saved Search"
                    icon={faSearch}
                />
                <NestedList
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    icon={faMessage}
                    id="review"
                    handleOpen={handleOpen}
                >
                    <NestedListItem title="My Review" />
                    <NestedListItem title="Visitor Review" />
                </NestedList>
                {/* 4 main */}
                <ListTitle title="Manage Account" />
                <ListComponent
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    id="my-packages"
                    title="My Package"
                    icon={faBox}
                />
                <ListComponent
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    id="profile"
                    title="My Profile"
                    icon={faUser}
                />
                <ListComponent
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    title="Logout"
                    icon={faRightFromBracket}
                />
                {/* 5main */}
            </Box>
        </Box>
    )
}

export default DashboardSidebar
