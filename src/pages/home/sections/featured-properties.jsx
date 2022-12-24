import React, { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import EsCard from "../../../components/card"
import api from "../../../api/api"
import Slider from "react-slick"
import { Heading } from "./wrapper"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useDispatch, useSelector } from "react-redux"
import { dataFetch } from "../../../utils/reducers"

const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />
}
const NextArrow = (props) => {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />
}

const FeaturedPro = () => {
    const data = useSelector((state) => state.data.data?.properties) ?? []
    const title = "Featured Properties"
    const content = "Handpicked properties by our team"

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <>
            <Box sx={{ width: "100%", backgroundColor: "#f7f7f7" }}>
                <Heading sx={{ marginTop: 0, paddingTop: "50px" }}>
                    <Typography variant="h4" color="#484848" lineHeight="1.5rem">
                        {title}
                    </Typography>
                    <Typography variant="body1" lineHeight="1.5rem">
                        {content}
                    </Typography>
                </Heading>
                <Box
                    sx={{
                        maxWidth: "80em",
                        position: "relative",
                        left: "50%",
                        transform: "translateX(-50%)",
                        padding: "30px 0",
                    }}
                >
                    <Slider {...settings}>
                        {data?.map((property) => (
                            <>
                                {console.log(property.propertyImage)}
                                <EsCard
                                    property={property.property}
                                    propertyImage={property.propertyImage}
                                    type={property.type}
                                    location={property.location}
                                    price={property.price}
                                    sale={property.sale}
                                    rent={property.rent}
                                    bed={property.bed}
                                    bath={property.bath}
                                    area={property.area}
                                    poster={property.poster}
                                    posterImage={property.posterImage}
                                    date={property.date}
                                    featured={property.featured}
                                    key={property.id}
                                />
                            </>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </>
    )
}

export default FeaturedPro
