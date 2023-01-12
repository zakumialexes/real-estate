import { useEffect, useState } from "react"

// Files
import style from "./agent-list.module.scss"
import LeftSide from "./left-side/left-side"
import RightSide from "./right-side/right-side"
import ListHeader from "./list-header/list-header"
import { useGetAgentListQuery } from "../../api/api"

function AgentList(props) {
    const [sortBy, setSortBy] = useState(0)
    const [isGrid, setIsGrid] = useState(true)
    const [showSearchOverlay, setShowSearchOverlay] = useState(false)

    useEffect(() => {
        showSearchOverlay ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
    }, [showSearchOverlay])
    const { data, isSuccess } = useGetAgentListQuery()
    if (isSuccess) {
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
                            totalPageCount={Math.ceil(data.length / 6)}
                        />
                        <RightSide showSearchOverlay={showSearchOverlay} setShowSearchOverlay={setShowSearchOverlay} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AgentList
