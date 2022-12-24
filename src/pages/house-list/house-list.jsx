import houseStyle from "./house-list.module.scss"
import ListHeader from "../agent-list/list-header/list-header";
import { useEffect, useState } from "react";
import LeftSide from "./left-side/left-side";
import RightSide from "./right-side/right-side";
import { useSelector, useDispatch } from "react-redux";
import { dataFetch } from "../../utils/reducers";

export default function HouseList() {
    const [sortBy, setSortBy] = useState(0);
    const [paginationPage, setPaginationPage] = useState(1);
    const [isGrid, setIsGrid] = useState(true);
    const [showSearchOverlay, setShowSearchOverlay] = useState(false)
    const dispatch = useDispatch()
    const housesPerPage = 6
    const totalPageCount = Math.ceil(useSelector(state => state.data.totalCount) / housesPerPage)


    useEffect(() => {
        showSearchOverlay ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [showSearchOverlay])

    const paginateLink = [`houses?_page=${paginationPage}&&_limit=${housesPerPage}`, "get"]
    useEffect(() => {
        dispatch(dataFetch(["houses", "all"]))
    }, [])
    useEffect(() => {
        dispatch(dataFetch(paginateLink))
    }, [paginationPage])
    const leftSideProps = {
        isGrid, setSortBy, sortBy, paginationPage, setPaginationPage, totalPageCount
    }
    return (
        <div className={houseStyle.section}>
            <div className={houseStyle.container}>
                <ListHeader isGrid={isGrid} setIsGrid={setIsGrid}
                    toggleSearchOverlay={() => setShowSearchOverlay(prevState => !prevState)}>
                    Customer View
                </ListHeader>
                <div className={houseStyle.content}>
                    <LeftSide {...leftSideProps} />
                    <RightSide showSearchOverlay={showSearchOverlay} setShowSearchOverlay={setShowSearchOverlay} />
                </div>
            </div>
        </div>
    )
}