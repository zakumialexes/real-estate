import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import carouselStyle from "./img-carousel.module.scss"

export default function Carousel({tags, children}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const sliderRef = useRef(null)
    return (
        <div className={carouselStyle.carouselContainer}>
            <div className={carouselStyle.prevArrow} onClick={() => sliderRef.current.slickPrev()}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {children}
            </Slider>
            <div className={carouselStyle.nextArrow} onClick={() => sliderRef.current.slickNext()}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className={carouselStyle.tagContainer}>
                <ul className={carouselStyle.tags}>
                    {tags.map((tag, i) => (
                        <li className={carouselStyle.tag} key={i}>
                            <a href="#">{tag}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}