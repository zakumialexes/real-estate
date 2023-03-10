import houseCardStyle from "./grid-house-card.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Carousel from "../img-carousel/carousel"
import { useNavigate } from "react-router-dom"

export default function GridHouseCard({ house }) {
    const navigate = useNavigate()
    return (
        <div className={`${houseCardStyle.card}`} onClick={() => navigate(`${house.id}`)}>
            <div className={houseCardStyle.imgContainer}>
                <Carousel tags={house.tags} dots={false}>
                    {house.photos.map((photo, i) => (
                        <img src={photo} key={i} />
                    ))}
                </Carousel>
            </div>
            <div className={`${houseCardStyle.detail}`}>
                <div className={houseCardStyle.content}>
                    <p className={houseCardStyle.type}>{house.type}</p>
                    <h4>{house.name}</h4>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot} /> {house.location}
                    </p>
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
                <div className={`${houseCardStyle.footer}`}>
                    <div className={houseCardStyle.profile}>
                        <img src={house.creator.photo} alt="" />
                        <p>{house.creator.name}</p>
                    </div>
                    <div className={houseCardStyle.time}>{house.createdDate}</div>
                </div>
            </div>
        </div>
    )
}
