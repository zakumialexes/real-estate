import {Grid, PaginationItem} from "@mui/material";
import {CustomPagination, IconTextField} from "../agent-list/custom-components/custom-components";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import usePaginate from "../agent-list/pagination";
import BlogCard from "./blog-card/blog-card";
import {ArrowBackOutlined, ArrowForwardOutlined} from "@mui/icons-material";
import BlogLayout from "./blog-layout/blog-layout";

export default function BlogList() {
    const [paginationPage, setPaginationPage] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState();

    const {totalPageCount, paginatedData: paginatedBlogs} = usePaginate("blog-list", paginationPage, 3)

    function handlePaginationChange(event, value) {
        setPaginationPage(value);
    }

    function handleSearchKeyword(event) {
        setSearchKeyword(event.target.value)
    }

    return (
        <BlogLayout>
            <Grid item>
                <IconTextField value={searchKeyword} handleChange={handleSearchKeyword}
                               forName="Search Keyword" icon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}/>
            </Grid>
            <Grid item container>
                {paginatedBlogs.map((blog, i) => (
                    <BlogCard blog={blog} key={i}/>
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
                                  )} onChange={handlePaginationChange}/>
            </Grid>
        </BlogLayout>
    )
}