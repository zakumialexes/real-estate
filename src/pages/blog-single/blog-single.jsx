import React, {useEffect, useState} from 'react';
import BlogLayout from "../blog-list/blog-layout/blog-layout";
import style from "./blog-single.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faChevronCircleLeft,
    faChevronCircleRight,
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import {faComment, faEye} from "@fortawesome/free-regular-svg-icons";
import {faFacebookF, faGoogle, faLinkedin, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import RelatedBlogCard from "./related-post-card/related-blog-card";
import {Grid, Typography} from "@mui/material";

function BlogSingle() {
    const [blog, setBlog] = useState();
    const [relatedBlogs, setRelatedBlogs] = useState([])

    async function fetchBlogs() {
        const [fetchedBlog, fetchedRelatedBlog] = await Promise.all([
            fetch("http://localhost:3500/blog-list/1").then(response => response.json()),
            fetch("http://localhost:3500/blog-list?_limit=2").then(response => response.json())
        ])
        setBlog(fetchedBlog)
        setRelatedBlogs(fetchedRelatedBlog)
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <BlogLayout>
            <div className={style.blogSingleContent}>
                <div className={style.tagContainer}>
                    {blog?.tags.map((tag, i) => (
                        <a href="#" className={style.tag} key={i}>{tag}</a>
                    ))}
                </div>
                <h3 className={style.blogTitle}>{blog?.title}</h3>
                <div className={style.blogInfo}>
                    <img src={blog?.creator.photo} alt=""/>
                    <p>{blog?.creator.name}</p>
                    <p><FontAwesomeIcon icon={faCalendarDays}/> {blog?.createdDate}</p>
                    <p><FontAwesomeIcon icon={faEye}/> 123</p>
                    <p><FontAwesomeIcon icon={faComment}/> 123</p>
                </div>
                <div className={style.imgContainer}>
                    <img src={blog?.photo} alt=""/>
                </div>
                <div className={style.description}>
                    <p>{blog?.description}</p>
                </div>
                <div className={style.quoteContainer}>
                    <div className={style.blockQuote}>
                        <span className={style.quoteIcon}><FontAwesomeIcon icon={faQuoteLeft}/></span><br/>
                        <em className={style.quoteText}>Duis mollis et sem sed sollicitudin. Donec non odio
                            neque. Aliquam hendrerit sollicitudin purus, quis
                            rutrum mi accumsan nec.</em>
                    </div>
                </div>
                <div className={style.socials}>
                    <p>Share</p>
                    <div className={style.socialIcon}>
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </div>
                    <div className={style.socialIcon}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </div>
                    <div className={style.socialIcon}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                    <div className={style.socialIcon}>
                        <FontAwesomeIcon icon={faGoogle}/>
                    </div>
                    <div className={style.socialIcon}>
                        <FontAwesomeIcon icon={faPinterest}/>
                    </div>
                </div>
                <div className={style.blogPaginate}>
                    <div className={style.prevPage}>
                        <a href="#">
                            <FontAwesomeIcon icon={faChevronCircleLeft}/>
                        </a>
                        <div className={style.blogPaginateContent}>
                            <h5>Previous Post</h5>
                            <p>Housing Marketing That</p>
                        </div>
                    </div>
                    <div className={style.nextPage}>
                        <div className={style.blogPaginateContent}>
                            <h5>Next Post</h5>
                            <p>Housing Marketing That</p>
                        </div>
                        <a href="#">
                            <FontAwesomeIcon icon={faChevronCircleRight}/>
                        </a>
                    </div>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Related Posts</Typography>
                    </Grid>
                    {relatedBlogs.map((relatedBlog, i) => (
                        <Grid item key={i} sm={6}>
                            <RelatedBlogCard blog={relatedBlog}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </BlogLayout>
    );
}

export default BlogSingle;