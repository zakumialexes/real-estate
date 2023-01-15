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
const NestedList = ({ select, handleActive, id, icon = "", selected, handleOpen, children, title }) => {
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
                <Typography>{title}</Typography>
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
const ListComponentCustomIcon = ({ select, handleActive, id, title, icon, to = "#" }) => {
    return (
        <ListItem disablePadding className={`${style.listItem} ${select === id ? style.active : null}`}>
            <Link className={style.menuItem} id={id} onClick={handleActive}>
                {icon}
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
    const windowPath = window.location.pathname.split("/")[2]
    const selectedPath = windowPath.split(" ").length === 1 ? windowPath : windowPath.split(" ").join("-")
    const [select, setValue] = useState(selectedPath)
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
                <ListComponentCustomIcon
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    id="Add New Listing"
                    title="Add New Listing"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-filter"
                            viewBox="0 0 14 14"
                        >
                            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    }
                />
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
                    id="my-saved-searchs"
                    title="Saved Search"
                    icon={faSearch}
                />
                <NestedList
                    select={select}
                    setSelect={setSelect}
                    handleActive={handleActive}
                    icon={faMessage}
                    id="reviews"
                    title="My Reviews"
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
