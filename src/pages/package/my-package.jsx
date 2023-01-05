import { faSearch, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material"
import {
    Grid,
    Typography,
    TableContainer,
    TableRow,
    TableCell,
    Table,
    TableHead,
    TableBody,
    PaginationItem,
} from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { ColorButton, CustomPagination, IconTextField } from "../agent-list/custom-components/custom-components"
import { dataFetch, useDispatch, useSelector, dataSelector } from "../../utils/reducers"

export default function MyPackage() {
    const [paginationPage, setPaginationPage] = useState(1)
    const [searchKeyword, setSearchKeyword] = useState("")
    const [search, setSearch] = useState(false)

    const dispatch = useDispatch()
    let paginatedPackages = useSelector(dataSelector) ?? []
    let totalPageCount

    function handleSearchKeyword(event) {
        setSearchKeyword(event.target.value)
        event.target.value ? setSearch(false) : setSearch(true)
    }

    function handleSearchOnIcon() {
        setSearch(true)
        setPaginationPage(1)
    }

    function handleEnter(event) {
        if (event.keyCode === 13) {
            setSearch(true)
            setPaginationPage(1)
        }
    }
    const paginateLink = [`packages?_page=${paginationPage}&&_limit=7`, "get"]
    useEffect(() => {
        dispatch(dataFetch(["packages", "all"]))
        dispatch(dataFetch(paginateLink))
    }, [])
    useEffect(() => {
        if (search) {
            searchKeyword
                ? dispatch(dataFetch([`packages?q=${searchKeyword}&&_page=${paginationPage}&&_limit=${7}`, "get"]))
                : dispatch(dataFetch(paginateLink))
        }
    }, [searchKeyword, paginationPage, search])
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="space-between">
                <Grid item xs={6}>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: "30px",
                            lineHeight: "1.2",
                            color: "#484848",
                            fontWeight: "bold",
                            marginBottom: "0.5rem",
                        }}
                    >
                        My Packages
                    </Typography>
                    <Typography
                        variant="p"
                        component="p"
                        sx={{
                            fontSize: "14px",
                            color: "#484848",
                            fontWeight: "400",
                        }}
                    >
                        We are glad to see you again!
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <IconTextField
                        value={searchKeyword}
                        handleKeyDown={handleEnter}
                        handleChange={handleSearchKeyword}
                        forName="package search"
                        icon={
                            <>
                                <FontAwesomeIcon
                                    icon={faX}
                                    style={{ marginRight: "20px" }}
                                    onClick={() => setSearchKeyword("")}
                                />
                                <FontAwesomeIcon icon={faSearch} onClick={handleSearchOnIcon} />
                            </>
                        }
                    />
                </Grid>
            </Grid>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                        sx={{
                            "& .MuiTableCell-root": {
                                backgroundColor: "rgb(36, 50, 74)",
                                border: "none",
                                fontSize: "16px",
                                color: "#ffffff",
                                fontWeight: "bold",
                                lineHeight: "2.2",
                            },
                        }}
                    >
                        <TableRow>
                            <TableCell>Current Package</TableCell>
                            <TableCell>Properties Remaining</TableCell>
                            <TableCell>Featured Remainging</TableCell>
                            <TableCell>Renewal Remaining</TableCell>
                            <TableCell>Storage Space</TableCell>
                            <TableCell>Expiry Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            "& .MuiTableCell-root": {
                                fontSize: "16px",
                                fontWeight: "600",
                            },
                        }}
                    >
                        {paginatedPackages.map((paginatedPackage, i) => (
                            <TableRow key={`packageKey${i}`}>
                                <TableCell component="th" scope="row" sx={{ textTransform: "capitalize" }}>
                                    {paginatedPackage.currentPackage}
                                </TableCell>
                                <TableCell>{paginatedPackage.propertiesRemaining}</TableCell>
                                <TableCell>{paginatedPackage.featuredRemaining}</TableCell>
                                <TableCell>{paginatedPackage.renewalRemaining}</TableCell>
                                <TableCell>{paginatedPackage.storageSpace} MB / 20 MB</TableCell>
                                <TableCell>{paginatedPackage.expiredDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justifyContent="end" margin="20px 0">
                <Grid container item xs={12} justifyContent="center">
                    <CustomPagination
                        page={paginationPage}
                        size="large"
                        count={totalPageCount}
                        variant="outlined"
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{
                                    previous: ArrowBackOutlined,
                                    next: ArrowForwardOutlined,
                                }}
                                {...item}
                            />
                        )}
                        onChange={(e, v) => setPaginationPage(v)}
                    />
                </Grid>
                <Grid item>
                    <ColorButton sx={{ padding: "0 30px" }}>Change Package</ColorButton>
                </Grid>
            </Grid>
        </Container>
    )
}
