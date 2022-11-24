import style from "./blog-list.module.scss"
import {Container, Grid, PaginationItem} from "@mui/material";
import {CustomPagination, IconTextField} from "../agent-list/custom-components/custom-components";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import usePaginate from "../agent-list/pagination";
import BlogCard from "./blog-card/blog-card";
import {ArrowBackOutlined, ArrowForwardOutlined} from "@mui/icons-material";
import CategoriesProperties from "../house-list/categories-properties/categories-properties";
import FeaturedProperties from "../agent-list/right-side/featured-properties/featured-properties";
import TagsList from "./tags/tags-list";

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
        <Container maxWidth="md" sx={{padding: "60px 0"}}>
            <div className={style.breadcrumbContainer}>
                <ol className={style.breadcrumb}>
                    <li className="">
                        <a href="#">Home</a>
                    </li>
                    <li className="" aria-current="page">
                        Simple Listing –
                    </li>
                </ol>
                <h2 className={style.breadcrumbTitle}>Blog</h2>
            </div>
            <Grid container direction="row" justifyContent="center" spacing={4}>
                {/*Left Side*/}
                <Grid item container direction="column" md={8}>
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
                </Grid>
                {/*Right Side*/}
                <Grid item direction="column" md={4} maxWidth={"100%"}>
                    <CategoriesProperties/>
                    <FeaturedProperties/>
                    <TagsList/>
                </Grid>
            </Grid>
        </Container>
    )
}