import { Grid, PaginationItem } from "@mui/material";
import { CustomPagination, IconTextField } from "../agent-list/custom-components/custom-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BlogCard from "./blog-card/blog-card";
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import BlogLayout from "./blog-layout/blog-layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dataFetch } from "../../utils/reducers";

export default function BlogList() {
    const [paginationPage, setPaginationPage] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState();
    const [search, setSearch] = useState(false)

    const dispatch = useDispatch()
    const paginatedBlogs = useSelector(state => state.data.data) ?? []
    const blogsPerPage = 3;
    const totalPageCount = Math.ceil(useSelector(state => state.data.totalCount) / blogsPerPage);

    function handlePaginationChange(event, value) {
        setPaginationPage(value);
    }

    function handleSearchKeyword(event) {
        setSearchKeyword(event.target.value)
    }

    const paginateLink = [`blog-list?_page=${paginationPage}&&_limit=${blogsPerPage}`, "get"]
    useEffect(() => {
        dispatch(dataFetch(["blog-list", "all"]))
        dispatch(dataFetch(paginateLink))
    }, [])
    useEffect(() => {
        if (search) {
            searchKeyword ?
                dispatch(dataFetch([`blog-list?q=${searchKeyword}&&_page=${paginationPage}&&_limit=${blogsPerPage}`, "get"])) :
                dispatch(dataFetch(paginateLink))
        }
    }, [searchKeyword, paginationPage, search])

    return (
        <BlogLayout>
            <Grid item>
                <IconTextField value={searchKeyword} handleChange={handleSearchKeyword}
                    forName="Search Keyword" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            </Grid>
            <Grid item container>
                {paginatedBlogs.map((blog, i) => (
                    <BlogCard blog={blog} key={i} />
                ))}
            </Grid>
            <Grid item display="flex" justifyContent="center">
                <CustomPagination page={paginationPage} size="large" count={totalPageCount} variant="outlined"
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{
                                previous: ArrowBackOutlined,
                                next: ArrowForwardOutlined
                            }} {...item}
                        />
                    )} onChange={(event, value) => setPaginationPage(value)} />
            </Grid>
        </BlogLayout>
    )
}