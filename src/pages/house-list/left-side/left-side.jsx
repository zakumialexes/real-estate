// Files
import style from "../../agent-list/left-side/left-side.module.scss";
import SortByFeatured from "../../agent-list/sort-by-featured";
import {CustomPagination} from "../../agent-list/custom-components";

// Library
import {PaginationItem} from "@mui/material";
import {ArrowBackOutlined, ArrowForwardOutlined} from "@mui/icons-material";
import HouseCard from "../house-card/house-card";

export default function LeftSide({
                                     sortBy,
                                     setSortBy,
                                     isGrid,
                                     houses,
                                     paginationPage,
                                     setPaginationPage,
                                     totalPageCount,
                                     children
                                 }) {
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

                </div>
                <div>
                    <SortByFeatured sortBy={sortBy} setSortBy={setSortBy}/>
                </div>
            </div>
            <div className={isGrid ? style.agentContainer : style.agentContainerList}>
                {houses.map((house, i) => (
                    <HouseCard house={house} isGrid={isGrid} key={i}/>
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