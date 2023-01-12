import {
    Select,
    styled,
    TextField,
    Typography,
    Box,
    Stack,
    useMediaQuery,
    PaginationItem,
    Tooltip,
    Zoom,
    Modal,
} from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons"
import { CustomMenuItem } from "../agent-list/custom-components/custom-components"
import { CustomPagination } from "../agent-list/custom-components/custom-components"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material"
import { deleteBtn } from "./svg"
export const IconButton = ({ path, title, clicked }) => {
    const style = {
        fill: "#ff5a5f",
        backgroundColor: "rgb(247, 247, 247)",
        borderRadius: "5px",
        width: "min-content",
        zIndex: 10,
    }

    return (
        <Tooltip title={title} arrow TransitionComponent={Zoom} placement="top">
            <Box sx={style} onClick={clicked}>
                <svg height="45" width="45" viewBox="-20 -670 600 950">
                    <path transform="scale(1,-1)" fill={style.fill} d={path} />
                </svg>
            </Box>
        </Tooltip>
    )
}

export const DeleteModal = ({ children, open, setOpen, handleOpen, handleClose }) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "white",
        boxShadow: 24,
        borderRadius: "10px",
        p: 3,
    }
    return (
        <Box>
            <IconButton clicked={handleOpen} path={deleteBtn} title="Delete" />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>{children}</Box>
            </Modal>
        </Box>
    )
}

export const CustomSelect = styled(Select)(() => ({
    width: "100%",
    textTransform: "capitalize",
    legend: {
        display: "none",
    },
    ".Mui-focused": {
        border: "1px solid rgb(235, 235, 235)",
    },
    "& fieldset": {
        border: "1px solid rgb(235, 235, 235) !important",
        borderRadius: "8px",
        color: "#484848",
        fontSize: "14px",
        paddingLeft: "20px",
    },
    "& Mui-selected": {
        backgroundColor: "red",
    },
    ul: {
        padding: 0,
    },
    "& .MuiSelect-select": {
        span: {
            display: "none",
        },
    },
    ".MuiPaper-elevation": {
        boxShadow: "none",
    },
    ".MuiSelect-outlined": {
        backgroundColor: "white",
        marginTop: "-5px",
        borderRadius: "5px",
    },
}))
export const CustomTextField = styled(TextField)({
    "& fieldset": {
        border: "1px solid rgb(235, 235, 235) !important",
        borderRadius: "8px",
        color: "#484848",
        fontSize: "14px",
        paddingLeft: "20px",
    },
})

export const Title = ({ name }) => {
    return (
        <Box sx={{ maxWidth: "100%", minWidth: "100px", margin: "30px 0" }}>
            <Typography variant="h4" sx={{ marginBottom: "10px" }}>
                My {name}
            </Typography>
            <Typography variant="body2">We glad to see you again!</Typography>
        </Box>
    )
}

export const SearchBar = ({ query, search, setQuery, filter, setFilter, setSearch, setPage, name }) => {
    const options = ["Featured First", "Recent", "Old Review"]
    const smallScreen = useMediaQuery("(max-width:500px)")
    const medium = useMediaQuery("(max-width: 993px)")
    const style = {
        container: {
            margin: "20px 0",
        },
        search: {
            backgroundColor: "white",
            borderRadius: "5px",
            minWidth: "250px",
            maxWidth: "400px",
        },
        select: {
            height: "100%",
            marginTop: "20px",
            width: "220px",
        },
    }
    const handleEnter = () => {
        setSearch(query)
        setPage(1)
    }
    const handleInput = (e) => {
        setQuery(e.target.value)
    }
    const handleClear = () => {
        setSearch("")
        setQuery("")
    }
    const handleSearch = () => {
        setSearch((pre) => !pre)
        setPage(1)
    }
    if (query === "" && search === true) {
        setSearch("")
        setPage(1)
    }
    return (
        <Stack direction={medium ? "column" : "row"} justifyContent="space-between">
            <Box>
                <Title name={name} />
            </Box>
            <Stack
                direction="row"
                justifyContent={smallScreen ? "center" : "flex-end"}
                alignItems="center"
                flexWrap="wrap"
                spacing={2}
                flexGrow={1}
                sx={style.container}
            >
                <CustomTextField
                    onKeyUp={(e) => e.key === "Enter" && query && handleEnter()}
                    sx={style.search}
                    margin="normal"
                    required
                    onChange={handleInput}
                    fullWidth
                    value={query}
                    id="search"
                    name="search"
                    autoComplete="Search"
                    placeholder="Search Courses"
                    InputProps={{
                        endAdornment: (
                            <>
                                {query && (
                                    <ClearIcon
                                        color="primary"
                                        onClick={handleClear}
                                        sx={{ cursor: "pointer", margin: "10px" }}
                                    />
                                )}

                                <Box onClick={handleSearch} sx={{ cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </Box>
                            </>
                        ),
                        disableUnderline: true,
                    }}
                />
                <Box>
                    <CustomSelect sx={style.select} value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <CustomMenuItem value="default">
                            All
                            <span>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </CustomMenuItem>
                        {options.map((option, i) => (
                            <CustomMenuItem value={option} key={i}>
                                {console.log(i)}
                                {option}
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </CustomMenuItem>
                        ))}
                    </CustomSelect>
                </Box>
            </Stack>
        </Stack>
    )
}

export const TableContainerCon = ({
    name,
    search,
    setSearch,
    query,
    setQuery,
    action,
    children,
    page,
    setPage,
    totalPage,
    filter,
    setFilter,
}) => {
    const style = {
        container: {
            bgcolor: "#f7f7f7",
            height: "fit-content",
        },
        tableContainer: {
            padding: "30px",
            maxWidth: "1150px",
            borderRadius: "10px",
            backgroundColor: "#fff",
        },
    }
    const handlePageChange = (event, value) => {
        setPage(value)
    }
    return (
        <Box sx={style.container}>
            <Box sx={{ margin: "30px", maxWidth: "1114px" }}>
                <SearchBar
                    name={name}
                    search={search}
                    setSearch={setSearch}
                    query={query}
                    setQuery={setQuery}
                    action={action}
                    filter={filter}
                    setPage={setPage}
                    setFilter={setFilter}
                />
                <Box sx={style.tableContainer}>
                    {children}
                    <PaginationCon page={page} totalPage={totalPage} handleChange={handlePageChange} />
                </Box>
            </Box>
        </Box>
    )
}

export const PaginationCon = ({ page, totalPage, handleChange }) => {
    const style = {
        marginTop: "30px",
        maxWidth: "100%",
    }
    return (
        <Box sx={style}>
            <CustomPagination
                sx={{ width: "fit-content", margin: "auto" }}
                page={page}
                size="large"
                count={totalPage}
                variant="outlined"
                renderItem={(item) => (
                    <PaginationItem slots={{ previous: ArrowBackOutlined, next: ArrowForwardOutlined }} {...item} />
                )}
                onChange={handleChange}
            />
        </Box>
    )
}
