import style from "./tags-list.module.scss"

const tagsList = ["apartment", "real estate", "estate", "luxury", "real"]
export default function TagsList() {
    return (
        <div className={style.tagContainer}>
            <h4 className={style.tagHeader}>Tags</h4>
            <ul className={style.tagsList}>
                {tagsList.map((tag,i)=>(
                    <li key={i}>
                        <a href="">{tag}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}