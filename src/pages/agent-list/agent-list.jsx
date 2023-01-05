import { useEffect, useState } from "react"

// Files
import style from "./agent-list.module.scss"
import LeftSide from "./left-side/left-side"
import RightSide from "./right-side/right-side"
import ListHeader from "./list-header/list-header"
import { dataFetch, useDispatch, useSelector, totalPageSelector } from "../../utils/reducers"

function AgentList(props) {
    const [sortBy, setSortBy] = useState(0)
    const [paginationPage, setPaginationPage] = useState(1)
    const [isGrid, setIsGrid] = useState(true)
    const [showSearchOverlay, setShowSearchOverlay] = useState(false)

    const dispatch = useDispatch()
    const totalPageCount = useSelector(totalPageSelector)

    useEffect(() => {
        showSearchOverlay ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
    }, [showSearchOverlay])

    const paginateLink = [`agent-list?_page=${paginationPage}&&_limit=${6}`, "get"]
    useEffect(() => {
        dispatch(dataFetch(["agent-list", "all", "", 6]))
    }, [])
    useEffect(() => {
        dispatch(dataFetch(paginateLink))
    }, [paginationPage])

    return (
        <div className={style.section}>
            <div className={style.container}>
                <ListHeader
                    isGrid={isGrid}
                    setIsGrid={setIsGrid}
                    toggleSearchOverlay={() => setShowSearchOverlay((prevState) => !prevState)}
                >
                    All Agents
                </ListHeader>
                <div className={style.content}>
                    <LeftSide
                        isGrid={isGrid}
                        setSortBy={setSortBy}
                        sortBy={sortBy}
                        paginationPage={paginationPage}
                        setPaginationPage={setPaginationPage}
                        totalPageCount={totalPageCount}
                    />
                    <RightSide showSearchOverlay={showSearchOverlay} setShowSearchOverlay={setShowSearchOverlay} />
                </div>
            </div>
        </div>
    )
}

export default AgentList
