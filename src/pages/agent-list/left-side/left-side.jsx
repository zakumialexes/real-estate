// Files
import style from "./left-side.module.scss";
import SortBy from "../sort-by";
import AgentCard from "../agent-card/agent-card";

// Library
import {Pagination, PaginationItem, styled} from "@mui/material";
import {ArrowBackOutlined, ArrowForwardOutlined} from "@mui/icons-material";

const CustomPagination = styled(Pagination)(({theme}) => ({
    button: {
        border: "1px solid #ebebeb",
        color: "#777777",
        "&.Mui-selected": {
            backgroundColor: "#ff5a5f",
            color: "white",
            border: "none",
            "&:hover": {
                backgroundColor: "#ff5a5f"
            }
        }
    },
    "&:Mui-selected": {
        backgroundColor: "orange"
    }
}));
export default function LeftSide({sortBy, setSortBy, isGrid, agents, paginationPage, setPaginationPage,totalPageCount,children}) {
    function handlePaginationChange(event, value) {
        setPaginationPage(value);
    }

    return (
        <div className={style.leftSide}>
            {children}
            <div className={style.searchHeader}>
                <div>
                    <p>6 Search Results</p>
                </div>
                <div>
                    <SortBy sortBy={sortBy} setSortBy={setSortBy}/>
                </div>
            </div>
            <div className={isGrid ? style.agentContainer : style.agentContainerList}>
                {agents.map((agent, i) => (
                    <AgentCard agent={agent} key={i} isGrid={isGrid}/>
                ))}
            </div>
            <div className={style.paginationContainer}>
                <CustomPagination page={paginationPage} size="large" count={totalPageCount} variant="outlined"
                                  renderItem={(item) => (
                                      <PaginationItem
                                          slots={{previous: ArrowBackOutlined, next: ArrowForwardOutlined}} {...item}
                                      />
                                  )} onChange={handlePaginationChange}/>
            </div>
        </div>
    )
}