import houseStyle from "./house-list.module.scss"
import ListHeader from "../agent-list/list-header/list-header"
import { useEffect, useState } from "react"
import LeftSide from "./left-side/left-side"
import RightSide from "./right-side/right-side"
import { useGetByParametersHouseListQuery } from "../../api/api"

export default function HouseList() {
    const [sortBy, setSortBy] = useState(0)
    const [paginationPage, setPaginationPage] = useState(1)
    const [isGrid, setIsGrid] = useState(true)
    const [showSearchOverlay, setShowSearchOverlay] = useState(false)

    const { data: totalData, isSuccess: success1 } = useGetByParametersHouseListQuery(`/houses`)
    const { data: houses, isSuccess: success2 } = useGetByParametersHouseListQuery(
        `/houses?_page=${paginationPage}&_limit=6`
    )
    const totalPageCount = success1 && Math.ceil(totalData.length / 6)

    useEffect(() => {
        showSearchOverlay ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
    }, [showSearchOverlay])
    const leftSideProps = {
        isGrid,
        setSortBy,
        sortBy,
        paginationPage,
        setPaginationPage,
        totalPageCount,
        houses,
    }
    if (success1 && success2) {
        return (
            <div className={houseStyle.section}>
                <div className={houseStyle.container}>
                    <ListHeader
                        isGrid={isGrid}
                        setIsGrid={setIsGrid}
                        toggleSearchOverlay={() => setShowSearchOverlay((prevState) => !prevState)}
                    >
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
}
