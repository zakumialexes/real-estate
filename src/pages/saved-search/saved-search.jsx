import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"
import { CustomTextField, PaginationCon } from "../my-properties/customComponents"
import SavedTable from "./table"
import { useGetByParametersSavedSearchListQuery, useDeleteSavedSearchMutation } from "../../api/api"

const style = {
    search: {
        backgroundColor: "white",
        borderRadius: "5px",
        minWidth: "250px",
        maxWidth: "400px",
        width: { xs: "100%", sm: "80%" },
        alignSelf: { sm: "flex-end", lg: "center" },
    },
}

const SavedSearch = () => {
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState(false)
    const [page, setPage] = useState(1)
    const [deleteSavedSearch] = useDeleteSavedSearchMutation()
    const { data: totalData, isSuccess: success1 } = useGetByParametersSavedSearchListQuery(
        `/saved-search${search ? `?q=${search}` : ""}`,
        "Package"
    )
    const { data: displayData, isSuccess: success2 } = useGetByParametersSavedSearchListQuery(
        `/saved-search?_page=${[page]}&_limit=${4}${search ? `&q=${search}` : ""}`,
        "Package"
    )

    const handlePageChange = (event, value) => {
        setPage(value)
    }

    const Delete = async (id) => {
        try {
            await deleteSavedSearch(`/saved-search/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSearch = () => {
        setSearch(query)
        setPage(1)
    }

    const handleInput = (e) => {
        setQuery(e.target.value)
        setSearch(false)
    }
    if (success1 && success2) {
        return (
            <Box p={{ xs: 2, lg: 5 }} backgroundColor="#f7f7f7">
                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", lg: "center" }}
                >
                    <Box sx={{ maxWidth: "100%", minWidth: "100px", margin: "30px 0" }}>
                        <Typography variant="h4" sx={{ marginBottom: "10px" }} fontWeight="bold" lineHeight="2rem">
                            Saved Search
                        </Typography>
                        <Typography variant="body1">We glad to see you again!</Typography>
                    </Box>
                    <CustomTextField
                        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
                        sx={style.search}
                        margin="normal"
                        required
                        onChange={handleInput}
                        fullWidth
                        value={query}
                        name="search"
                        autoComplete="Search"
                        placeholder="Search Courses"
                        InputProps={{
                            endAdornment: (
                                <Box onClick={handleSearch} sx={{ cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </Box>
                            ),
                            disableUnderline: true,
                        }}
                    />
                </Stack>
                <SavedTable data={displayData} Delete={Delete} />
                <PaginationCon
                    page={page}
                    totalPage={Math.ceil(totalData.length / 4)}
                    handleChange={handlePageChange}
                />
            </Box>
        )
    }
}

export default SavedSearch
