import style from "./blog-card.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function BlogCard({ blog }) {
    const navigate = useNavigate()
    return (
        <div className={style.blogCardContainer} onClick={() => navigate(`${blog.id}`)}>
            <div className={style.photoContainer}>
                <img src={blog.photo} alt="" className={style.photo} />
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
                <p className={style.description}>{blog.description}</p>
            </div>
            <div className={style.blogCardFooter}>
                <div className={style.info}>
                    <img src={blog.creator.photo} alt="" />
                    <p className={style.name}>{blog.creator.name}</p>
                    <p className={style.date}>
                        <FontAwesomeIcon icon={faCalendarDays} /> {blog.createdDate}
                    </p>
                </div>
                <div className={style.readMore}>
                    Read More <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </div>
    )
}
