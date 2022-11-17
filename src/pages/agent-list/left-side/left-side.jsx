import style from "./left-side.module.scss";
import SortBy from "../SortBy";
import AgentCard from "../agent-card/agent-card";

export default function LeftSide({sortBy, setSortBy, isGrid, agents}) {
    return (
        <div className={style.leftSide}>
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
        </div>
    )
}