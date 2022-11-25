import React from 'react'
import HomeDesign from './sections/home-design'
import FeaturedPro from './sections/featured-properties'
import CityPro from './sections/city-properties'
import WhyChoUs from './sections/why-choose-us'
import Partner from './sections/our-partners'
import ArticleTips from './sections/articles&tips'
import { Box } from '@mui/material'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
      <>
        <HomeDesign />
        <FeaturedPro />
        <CityPro />
        <WhyChoUs />
        <ArticleTips/>
        <Partner />
      </>
  )
}

export default Home