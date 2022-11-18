import agentCardStyle from "./agent-card.module.scss"

// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faInstagram, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default function AgentCard({agent, isGrid = false}) {
    return (
        <div className={`${agentCardStyle.card} ${!isGrid && agentCardStyle.list}`}>
            <div className={agentCardStyle.imgContainer}>
                <img src={agent.photo} alt=""/>
                <div className={agentCardStyle.listing}>
                    <a href="#">{agent.listing} Listings</a>
                </div>
            </div>
            <div className={`${agentCardStyle.detail} ${!isGrid&&agentCardStyle.w70}`}>
                <div className={agentCardStyle.content}>
                    <h4>{agent.name}</h4>
                    <p className={agentCardStyle.type}>{agent.type}</p>
                    <ul className={agentCardStyle.propDetail}>
                        {Object.keys(agent.phoneNumber).map((type, i) => (
                            <li key={i}>
                                <a href="#">{type}: {agent.phoneNumber[type]}</a>
                            </li>
                        ))}
                        <li>
                            <a href="#">Email: {agent.email}</a>
                        </li>
                    </ul>
                </div>
                <div className={`${agentCardStyle.footer} ${isGrid && agentCardStyle.borderTop}`}>
                    <ul className={agentCardStyle.socialLinks}>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faPinterest}/></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faGoogle}/></a>
                        </li>
                    </ul>
                    <div className={agentCardStyle.viewListing}>
                        View My Listing <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        </div>
    )
}