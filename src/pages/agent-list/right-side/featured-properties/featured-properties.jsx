import { useRef } from "react"
import fPStyle from "./featured-properties.module.scss"
import { useGetByParametersQuery } from "../../../../api/api"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

// React slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function FeaturedProperties() {
    const sliderRef = useRef(null)
    const { data: houses, isSuccess } = useGetByParametersQuery("/houses?_limit=5")
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    if (isSuccess)
        return (
            <div className={fPStyle.container}>
                <h4>Featured Properties</h4>
                <div className={fPStyle.carouselContainer}>
                    <div className={fPStyle.prevArrow} onClick={() => sliderRef.current.slickPrev()}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <Slider {...settings} ref={sliderRef}>
                        {houses.map((house, i) => (
                            <div className={fPStyle.carouselCard} key={i}>
                                <img src={house.photos[0]} className={fPStyle.carouselImage} />
                                <div className={fPStyle.carouselContent}>
                                    <a href="#">
                                        ${house.rent}/<small>mo</small>{" "}
                                    </a>
                                    <h4>{house.name}</h4>
                                </div>
                                <div className={fPStyle.tagContainer}>
                                    <ul className={fPStyle.tags}>
                                        {house.tags.map((tag, j) => (
                                            <li className={fPStyle.tag} key={`tag${j}`}>
                                                <a href="#">{tag}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className={fPStyle.nextArrow} onClick={() => sliderRef.current.slickNext()}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>
        )
}
