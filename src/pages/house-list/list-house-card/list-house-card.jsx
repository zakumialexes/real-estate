import Carousel from "../img-carousel/carousel";
import listHouseStyle from './list-house-card.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function ListHouseCard({house}) {
    return (
        <div className={listHouseStyle.card}>
            <div className={listHouseStyle.carouselContainer}>
                <Carousel tags={house.tags}>
                    {house.photos.map((photo, i) => (
                        <img src={photo} key={i} className={listHouseStyle.carouselImg}/>
                    ))}
                </Carousel>
            </div>
            <div className={`${listHouseStyle.detail}`}>
                <div className={listHouseStyle.content}>
                    <p className={listHouseStyle.type}>{house.type}</p>
                    <h4>{house.name}</h4>
                    <p><FontAwesomeIcon icon={faLocationDot}/> {house.location}</p>
                    <ul className={listHouseStyle.propDetail}>
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
                <div className={`${listHouseStyle.footer}`}>
                    <div className={listHouseStyle.profile}>
                        <img src={house.creator.photo} alt=""/>
                        <p>{house.creator.name}</p>
                    </div>
                    <div className={listHouseStyle.time}>
                        {house.createdDate}
                    </div>
                </div>
            </div>
        </div>
    )
}