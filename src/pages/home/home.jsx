import React, { useEffect } from "react"
import HomeDesign from "./sections/home-design"
import FeaturedPro from "./sections/featured-properties"
import CityPro from "./sections/city-properties"
import WhyChoUs from "./sections/why-choose-us"
import { Testimonial } from "../about/testimonial"
import Partner from "./sections/our-partners"
import ArticleTips from "./sections/articles&tips"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useDispatch } from "react-redux"
import { dataFetch } from "../../utils/reducers"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(dataFetch(["home", "get"]))
    }, [])
    return (
        <>
            <HomeDesign />
            <FeaturedPro />
            <CityPro />
            <WhyChoUs />
            <ArticleTips />
            <Testimonial />
            <Partner />
        </>
    )
}

export default Home
