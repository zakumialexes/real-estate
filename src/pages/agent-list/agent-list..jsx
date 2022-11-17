import style from "./agent-list.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";
import SortBy from "./SortBy";
import {useEffect, useState} from "react";
import AgentCard from "./agent-card/agent-card";


function AgentList(props) {
    const [agents, setAgents] = useState([]);
    const [sortBy, setSortBy] = useState(0);

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
                                {/*Todo: to make according to view*/}
                                <span>Grid View</span>
                                <span>List View</span>
                            </li>
                        </ol>
                        <h2 className={style.breadcrumbTitle}>All Agents</h2>
                    </div>
                    <div className={style.listing}>
                        <ul className="">
                            <li className="">
                                Grid
                            </li>
                            <li className="">
                                <FontAwesomeIcon icon={faList}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.leftSide}>
                        <div className={style.searchHeader}>
                            <div>
                                <p>6 Search Results</p>
                            </div>
                            <div className="">
                                <SortBy sortBy={sortBy} setSortBy={setSortBy}/>
                            </div>
                        </div>
                        <div className={style.agentContainer}>
                            {agents.map((agent, i) => (
                                <AgentCard agent={agent} key={i}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentList;