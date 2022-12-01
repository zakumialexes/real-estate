import HouseSliderStyle from "./house-detail-slider.module.scss"
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "@mui/material"

const ImageSlider = ({
    photos = [
        "./assets/house-details/detail-photo-1.jpg",
        "./assets/house-details/detail-photo-2.jpg",
        "./assets/house-details/detail-photo-4.jpg",
    ],
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState("")
    const handleLeftArrow = () => {
        const index = currentIndex === 0 ? photos.length - 1 : currentIndex - 1
        const image = document.querySelector(".previousImage")
        const imageContainer = document.querySelector(".imageContainer")
        image.classList.add(HouseSliderStyle.previousImageTransitionUp)
        imageContainer.classList.add(HouseSliderStyle.turnWhite)
        setPreviousIndex(currentIndex)
        setCurrentIndex(index)
        setTimeout(() => {
            setPreviousIndex("")
            setTimeout(() => {
                imageContainer.classList.remove(HouseSliderStyle.turnWhite)
                image.classList.remove(HouseSliderStyle.previousImageTransitionUp)
            }, 50)
        }, 1650)
    }
    const handleRightArrow = () => {
        const index = currentIndex === photos.length - 1 ? 0 : currentIndex + 1
        const image = document.querySelector(".previousImage")
        const imageContainer = document.querySelector(".imageContainer")
        imageContainer.classList.add(HouseSliderStyle.turnWhite)
        image.classList.add(HouseSliderStyle.previousImageTransitionDown)
        setPreviousIndex(currentIndex)
        setCurrentIndex(index)
        setTimeout(() => {
            setPreviousIndex("")
            setTimeout(() => {
                image.classList.remove(HouseSliderStyle.previousImageTransitionDown)
                imageContainer.classList.remove(HouseSliderStyle.turnWhite)
            }, 50)
        }, 1650)
    }
    return (
        <div className={HouseSliderStyle.container}>
            <FontAwesomeIcon icon={faArrowLeftLong} className={HouseSliderStyle.leftArrow} onClick={handleLeftArrow} />
            <FontAwesomeIcon
                icon={faArrowRightLong}
                className={HouseSliderStyle.rightArrow}
                onClick={handleRightArrow}
            />
            <img
                height="100%"
                width="100%"
                src={photos[currentIndex]}
                className={HouseSliderStyle.currentImage}
                alt={`House Image ${currentIndex}`}
            />
            <div className={`${HouseSliderStyle.imageContainer} imageContainer`}>
                <div className={`${HouseSliderStyle.previousImage} previousImage`}>
                    {previousIndex !== "" && (
                        <img
                            height="100%"
                            width="100%"
                            src={photos[previousIndex] ?? ""}
                            alt={`House Image ${previousIndex}`}
                            style={{ filter: " brightness(50%)", objectFit: "cover" }}
                        />
                    )}
                </div>
                <Typography
                    position="absolute"
                    left={{ xs: "25px", sm: "100px" }}
                    color="#fff"
                    bottom={{ xs: "70%", md: "10%" }}
                    fontSize={{ xs: "1rem", sm: "1.3rem" }}
                >
                    <b>
                        <strong style={{ fontSize: "1.8rem" }}>Luxury Family Home</strong>
                    </b>
                    <br />
                    <br /> 1421 San Pedro St, Los Angeles, CA 90015
                </Typography>
                <Typography
                    position="absolute"
                    right={{ xs: "calc(100% - 115px)", sm: "calc(100% - 215px)", md: "10%" }}
                    color="#fff"
                    bottom={{ xs: "65%", md: "10%" }}
                    fontSize={{ xs: "1rem", sm: "1.3rem" }}
                >
                    <b>
                        <strong>$13,000</strong>
                    </b>
                    /mo
                </Typography>
            </div>
        </div>
    )
}
export default ImageSlider
