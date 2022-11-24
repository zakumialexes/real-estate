import React, {useEffect, useState} from 'react';
import BlogLayout from "../blog-list/blog-layout/blog-layout";
import style from "./blog-single.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faComment, faEye} from "@fortawesome/free-regular-svg-icons";
import {faFacebookF, faGoogle, faLinkedin, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";

function BlogSingle(props) {
    const [blog, setBlog] = useState();

    async function fetchBlog() {
        await fetch("http://localhost:3500/blog-list/1").then(response => response.json()).then(data => {
            setBlog(data)
            console.log(data);
        })
    }

    useEffect(() => {
        fetchBlog()
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
                    <div className={style.prePage}>

                    </div>
                </div>
            </div>
        </BlogLayout>
    );
}

export default BlogSingle;