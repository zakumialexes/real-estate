import style from "./agent-list.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faTableCells} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import LeftSide from "./left-side/left-side";


function AgentList(props) {
    const [agents, setAgents] = useState([]);
    const [sortBy, setSortBy] = useState(0);
    const [paginationPage, setPaginationPage] = useState(1);
    const [isGrid, setIsGrid] = useState(true);

    async function fetchingAgent() {
        const response = await fetch("http://localhost:3500/agent-list").then(data => data.json())
        setAgents(response)
    }

    useEffect(() => {
        fetchingAgent()
    }, [])
    return (
        <div className={style.section}>
            <div className={style.container}>
                <div className={style.header}>
                    <div className={style.breadcrumbContainer}>
                        <ol className={style.breadcrumb}>
                            <li className="">
                                <a href="#">Home</a>
                            </li>
                            <li className="" aria-current="page">
                                Simple Listing –
                                <span className={style.currentViewName}>{isGrid ? "Grid View" : "List View"}</span>
                            </li>
                        </ol>
                        <h2 className={style.breadcrumbTitle}>All Agents</h2>
                    </div>
                    <div className={style.listing}>
                        <ul className="">
                            <li onClick={() => setIsGrid(true)}>
                                <FontAwesomeIcon icon={faTableCells}/>
                            </li>
                            <li onClick={() => setIsGrid(false)}>
                                <FontAwesomeIcon icon={faList}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.content}>
                    <LeftSide isGrid={isGrid} setSortBy={setSortBy} sortBy={sortBy} agents={agents}
                              paginationPage={paginationPage} setPaginationPage={setPaginationPage}/>
                </div>
            </div>
        </div>
    );
}

export default AgentList;