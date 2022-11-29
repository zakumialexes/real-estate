import style from "./related-post-card.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faCalendarDays} from "@fortawesome/free-solid-svg-icons";

function RelatedBlogCard({blog}) {
    return (
        <div className={style.blogCardContainer}>
            <div className={style.photoContainer}>
                <img src={blog.photo} alt="" className={style.photo}/>
                <div className={style.tagContainer}>
                    <ul className={style.tags}>
                        {blog.tags.map((tag, i) => (
                            <li className={style.tag} key={i}>
                                <a href="#">{tag}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.blogCardContent}>
                <h4 className={style.title}>{blog.title}</h4>
                <p className={style.date}><FontAwesomeIcon icon={faCalendarDays}/> {blog.createdDate}</p>
                <p className={style.description}>{blog.description}</p>
            </div>
            <div className={style.blogCardFooter}>
                <div className={style.info}>
                    <img src={blog.creator.photo} alt=""/>
                    <div>
                        <p className={style.name}>{blog.creator.name}</p>
                        <a href="#" className={style.readMore}>Read More <FontAwesomeIcon icon={faAngleRight}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelatedBlogCard;