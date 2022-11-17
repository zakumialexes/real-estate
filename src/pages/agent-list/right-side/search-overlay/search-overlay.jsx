import style from "./search-overlay.module.scss"

export default function SearchOverlay({children, doesShow}) {
    return (
        <>
            <div className={`${style.searchOverlay} ${doesShow && style.showSearchOverlay}`}>
                {children}
            </div>
            {doesShow && <div className={style.greenOverlay}/>}
        </>
    )
}