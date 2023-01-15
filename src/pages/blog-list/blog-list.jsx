import { Grid, PaginationItem } from "@mui/material"
import { CustomPagination, IconTextField } from "../agent-list/custom-components/custom-components"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import BlogCard from "./blog-card/blog-card"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material"
import BlogLayout from "./blog-layout/blog-layout"
import { useGetByParametersBlogListQuery } from "../../api/api"

export default function BlogList() {
    const [paginationPage, setPaginationPage] = useState(1)
    const [searchKeyword, setSearchKeyword] = useState()
    const [searchedKeyword, setSearchedKeyword] = useState("")
    const { data: totalData, isSuccess: success2 } = useGetByParametersBlogListQuery(
        `/blog-list${searchedKeyword ? `?q=${searchedKeyword}` : ""}`
    )
    const { data, isSuccess } = useGetByParametersBlogListQuery(
        `/blog-list?_page=${paginationPage}&_limit=3${searchedKeyword ? `&q=${searchedKeyword}` : ""}`
    )
    const handleSearch = ({ target: { value } }) => {
        console.log(value)
        !value && setSearchedKeyword("")
        setSearchKeyword(value)
    }
    const handleKeydown = () => {
        setSearchedKeyword(searchKeyword)
    }
    if (isSuccess && success2) {
        return (
            <BlogLayout>
                <Grid item>
                    <IconTextField
                        value={searchKeyword}
                        handleChange={handleSearch}
                        forName="Search Keyword"
                        handleKeyDown={(e) => e.key === "Enter" && handleKeydown()}
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    />
                </Grid>
                <Grid item container>
                    {data.map((blog, i) => (
                        <BlogCard blog={blog} key={i} />
                    ))}
                </Grid>
                <Grid item display="flex" justifyContent="center">
                    <CustomPagination
                        page={paginationPage}
                        size="large"
                        count={Math.ceil(totalData.length / 3)}
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
}
