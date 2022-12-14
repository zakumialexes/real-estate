import {Container, Grid} from "@mui/material";
import style from "./blog-layout.module.scss";
import CategoriesProperties from "../../house-list/categories-properties/categories-properties";
import FeaturedProperties from "../../agent-list/right-side/featured-properties/featured-properties";
import TagsList from "../tags/tags-list";

function BlogLayout({children}) {
    return (
        <Container maxWidth="lg" sx={{
            padding: {
                sm: "auto"
            }
        }}>
            <div className={style.breadcrumbContainer}>
                <ol className={style.breadcrumb}>
                    <li className="">
                        <a href="src/pages/blog-list/blog-layout/blog-layout#">Home</a>
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
                    {children}
                </Grid>
                {/*Right Side*/}
                <Grid item md={4} maxWidth={"100%"}>
                    <CategoriesProperties/>
                    <FeaturedProperties/>
                    <TagsList/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BlogLayout;