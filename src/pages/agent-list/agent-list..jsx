import style from "./agent-list.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faTableCells} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import LeftSide from "./left-side/left-side";
import usePaginate from "./pagination";


function AgentList(props) {
    const [sortBy, setSortBy] = useState(0);
    const [paginationPage, setPaginationPage] = useState(1);
    const [isGrid, setIsGrid] = useState(true);

    const {totalPageCount, paginatedData: paginatedAgent} = usePaginate("agent-list", paginationPage, 6);
    return (
        <div className={style.section}>
            <div className={style.container}>
                <div className={style.header}>
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
                        <h2 className={style.breadcrumbTitle}>All Agents</h2>
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
                    </div>
                </div>
                <div className={style.content}>
                    <LeftSide isGrid={isGrid} setSortBy={setSortBy} sortBy={sortBy} agents={paginatedAgent}
                              paginationPage={paginationPage} setPaginationPage={setPaginationPage}
                              totalPageCount={totalPageCount}/>
                </div>
            </div>
        </div>
    );
}

export default AgentList;