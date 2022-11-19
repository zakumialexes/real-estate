import houseStyle from "./house-list.module.scss"
import ListHeader from "../agent-list/list-header/list-header";
import {useEffect, useState} from "react";
import LeftSide from "./left-side/left-side";
import usePaginate from "../agent-list/pagination";
import RightSide from "./right-side/right-side";

export default function HouseList() {
    const [sortBy, setSortBy] = useState(0);
    const [paginationPage, setPaginationPage] = useState(1);
    const [isGrid, setIsGrid] = useState(true);
    const [showSearchOverlay, setShowSearchOverlay] = useState(false)

    const {totalPageCount, paginatedData: paginatedHouse} = usePaginate("houses", paginationPage, 6);
    useEffect(() => {
        showSearchOverlay ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [showSearchOverlay])
    const leftSideProps = {
        isGrid, setSortBy, sortBy, paginationPage, setPaginationPage, totalPageCount, houses: paginatedHouse
    }
    return (
        <div className={houseStyle.section}>
            <div className={houseStyle.container}>
                <ListHeader isGrid={isGrid} setIsGrid={setIsGrid}
                            toggleSearchOverlay={() => setShowSearchOverlay(prevState => !prevState)}>
                    Customer View
                </ListHeader>
                <div className={houseStyle.content}>
                    <LeftSide {...leftSideProps}/>
                    <RightSide showSearchOverlay={showSearchOverlay} setShowSearchOverlay={setShowSearchOverlay}/>
                </div>
            </div>
        </div>
    )
}