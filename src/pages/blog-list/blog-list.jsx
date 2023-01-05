import { Grid, PaginationItem } from "@mui/material"
import { CustomPagination, IconTextField } from "../agent-list/custom-components/custom-components"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import BlogCard from "./blog-card/blog-card"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material"
import BlogLayout from "./blog-layout/blog-layout"
import { useEffect } from "react"
import { dataFetch, useDispatch, useSelector, dataSelector, totalPageSelector } from "../../utils/reducers"

export default function BlogList() {
    const [paginationPage, setPaginationPage] = useState(1)
    const [searchKeyword, setSearchKeyword] = useState()
    const [search, setSearch] = useState(false)

    const dispatch = useDispatch()
    const paginatedBlogs = useSelector(dataSelector) ?? []
    const totalPageCount = useSelector(totalPageSelector)

    const paginateLink = [`blog-list?_page=${paginationPage}&&_limit=${3}`, "get"]
    useEffect(() => {
        dispatch(dataFetch(["blog-list", "all", "", 3]))
        dispatch(dataFetch(paginateLink))
    }, [])
    useEffect(() => {
        if (search) {
            searchKeyword
                ? dispatch(dataFetch([`blog-list?q=${searchKeyword}&&_page=${paginationPage}&&_limit=${3}`, "get"]))
                : dispatch(dataFetch(paginateLink))
        }
    }, [searchKeyword, paginationPage, search])

    return (
        <BlogLayout>
            <Grid item>
                <IconTextField
                    value={searchKeyword}
                    handleChange={(e) => setSearchKeyword(e.target.value)}
                    forName="Search Keyword"
                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                />
            </Grid>
            <Grid item container>
                {paginatedBlogs.map((blog, i) => (
                    <BlogCard blog={blog} key={i} />
                ))}
            </Grid>
            <Grid item display="flex" justifyContent="center">
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
                    onChange={(event, value) => setPaginationPage(value)}
                />
            </Grid>
        </BlogLayout>
    )
}
