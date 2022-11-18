import houseCardStyle from "./house-card.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import agentCardStyle from "../../agent-list/agent-card/agent-card.module.scss";

export default function HouseCard({house, isGrid}) {
    return (
        <div className={`${houseCardStyle.card} ${!isGrid && houseCardStyle.list}`}>
            <div className={houseCardStyle.imgContainer}>
                <img src={house.photos[0]} alt=""/>
                <div className={houseCardStyle.listing}>

                </div>
            </div>
            <div className={`${houseCardStyle.detail} ${!isGrid && houseCardStyle.w70}`}>
                <div className={houseCardStyle.content}>
                    <p className={houseCardStyle.type}>{house.type}</p>
                    <h4>{house.name}</h4>
                    <p><FontAwesomeIcon icon={faLocationDot}/> {house.location}</p>
                    <ul className={houseCardStyle.propDetail}>
                        <li>
                            <a href="#">Beds: {house.beds}</a>
                        </li>
                        <li>
                            <a href="#">Baths: {house.baths}</a>
                        </li>
                        <li>
                            <a href="#">Sq Ft: {house.sqFt}</a>
                        </li>
                    </ul>
                </div>
                <div className={`${houseCardStyle.footer} ${isGrid && agentCardStyle.borderTop}`}>
                    <div className={houseCardStyle.profile}>
                        <img src={house.creator.photo} alt=""/>
                        <p>{house.creator.name}</p>
                    </div>
                    <div className={houseCardStyle.time}>
                        {house.createdDate}
                    </div>
                </div>
            </div>
        </div>
    )
}