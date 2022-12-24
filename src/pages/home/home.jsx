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
import { dataFetch, useDispatch, useSelector, dataSelector } from "../../utils/reducers"

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(dataSelector)

    useEffect(() => {
        !data && dispatch(dataFetch(["home", "get"]))
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
