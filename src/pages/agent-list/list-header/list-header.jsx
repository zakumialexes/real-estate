// Files
import style from "./list-header.module.scss";
import FilterListIcon from "@mui/icons-material/FilterList";

// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faTableCells} from "@fortawesome/free-solid-svg-icons";


function ListHeader({isGrid, setIsGrid, toggleSearchOverlay,children}) {
    return <div className={style.header}>
        <div className={style.breadcrumbContainer}>
            <ol className={style.breadcrumb}>
                <li className="">
                    <a href="#">Home</a>
                </li>
                <li className="" aria-current="page">
                    Simple Listing –
                    <span className={style.currentViewName}>{isGrid ? "Grid View" : "List View"}</span>
                </li>
            </ol>
            <h2 className={style.breadcrumbTitle}>{children}</h2>
        </div>
        <div className={style.listing}>
            <ul className="">
                <li onClick={() => setIsGrid(true)}>
                    <FontAwesomeIcon icon={faTableCells}/>
                </li>
                <li onClick={() => setIsGrid(false)}>
                    <FontAwesomeIcon icon={faList}/>
                </li>
            </ul>
            <div className={style.leftOverlayBtn}
                 onClick={toggleSearchOverlay}>
                <div className={style.filter}>
                    <div className={style.icon}>
                        <FilterListIcon/>
                    </div>
                    Show Filter
                </div>
            </div>
        </div>
    </div>;
}

export default ListHeader;