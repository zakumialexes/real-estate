// Files
import style from "./left-side.module.scss"
import SortByFeatured from "../sort-by-featured"
import AgentCard from "../agent-card/agent-card"
import { CustomPagination } from "../custom-components/custom-components"
import { useGetByParametersAgentListQuery } from "../../../api/api"

// Library
import { PaginationItem } from "@mui/material"
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material"
import { useState } from "react"

export default function LeftSide({ sortBy, setSortBy, isGrid, totalPageCount, children }) {
    const [paginationPage, setPaginationPage] = useState(1)
    const { data, isSuccess } = useGetByParametersAgentListQuery(`/agent-list?_page=${paginationPage}&_limit=6`)
    if (isSuccess) {
        return (
            <div className={style.leftSide}>
                {children}
                <div className={style.searchHeader}>
                    <div>
                        <p>6 Search Results</p>
                    </div>
                    <div>
                        <SortByFeatured sortBy={sortBy} setSortBy={setSortBy} />
                    </div>
                </div>
                <div className={isGrid ? style.agentContainer : style.agentContainerList}>
                    {data.map((agent, i) => (
                        <AgentCard agent={agent} key={i} isGrid={isGrid} />
                    ))}
                </div>
                <div className={style.paginationContainer}>
                    <CustomPagination
                        page={paginationPage}
                        size="large"
                        count={totalPageCount}
                        variant="outlined"
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{ previous: ArrowBackOutlined, next: ArrowForwardOutlined }}
                                {...item}
                            />
                        )}
                        onChange={(_, value) => setPaginationPage(value)}
                    />
                </div>
            </div>
        )
    }
}
