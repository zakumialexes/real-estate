import style from "./agent-list.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faTableCells} from "@fortawesome/free-solid-svg-icons";
import FilterListIcon from '@mui/icons-material/FilterList';
import {useEffect, useState} from "react";
import LeftSide from "./left-side/left-side";
import usePaginate from "./pagination";
import RightSide from "./right-side/right-side";


function AgentList(props) {
    const [sortBy, setSortBy] = useState(0);
    const [paginationPage, setPaginationPage] = useState(1);
    const [isGrid, setIsGrid] = useState(true);
    const [showSearchOverlay, setShowSearchOverlay] = useState(false)

    const {totalPageCount, paginatedData: paginatedAgent} = usePaginate("agent-list", paginationPage, 6);
    useEffect(() => {
        showSearchOverlay ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [showSearchOverlay])
    return (
        <div className={style.section}>
            <div className={style.container}>
                <ListHeader isGrid={isGrid} setIsGrid={setIsGrid}
                            toggleSearchOverlay={() => setShowSearchOverlay(prevState => !prevState)}>
                    All Agents
                </ListHeader>
                <div className={style.content}>
                    <LeftSide isGrid={isGrid} setSortBy={setSortBy} sortBy={sortBy} agents={paginatedAgent}
                              paginationPage={paginationPage} setPaginationPage={setPaginationPage}
                              totalPageCount={totalPageCount}/>
                    <RightSide showSearchOverlay={showSearchOverlay} setShowSearchOverlay={setShowSearchOverlay}/>
                </div>
            </div>
        </div>
    );
}

export default AgentList;