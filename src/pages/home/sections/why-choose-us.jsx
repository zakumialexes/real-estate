import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import React,{useState} from 'react'
import style from "./why-choose-us.module.scss"
import Wrapper from './wrapper'
import { home, profit, highFive } from './svg'


const ArticleIcon = ({ path, isHovered }) => {
  const wrapper = {
    width: "fit-content",
  }
  const style = {
    borderRadius: "50%",
    backgroundColor: isHovered ? "#ff5a5f" : "#ffe8e9",
    color: isHovered? "white": "#ff5a5f",
    transition: "all 0.5s ease",
    
  }
    return (
        <Box sx={wrapper}>
            <svg height="145" width="150" viewBox="-35 -680 600 950" style={style}>
              <path transform="scale(1,-1)" fill={`${style.color}`} style={{transition: `${style.transition}`}}  d={path} />
            </svg>
        </Box>
      )
  }


const Card = ({ icon, title, content }) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleHover = () => {
    setIsHovered(true)
  }
  const handleLeave = () => {
    setIsHovered(false)
  }
  
  return (
    <Box className={style.card} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <Box className={style.icon}>
        <ArticleIcon path={icon} isHovered={isHovered} />
      </Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "bold"}}>{title}</Typography>
        <Typography variant='title1'>{content}</Typography>
      </Box>
    </Box>
  )
}
const WhyChoUs = () => {
  const title = "Why Choose Us"
  const content = "We provide full service at every step"
  const cardContent = [
    {
      icon: highFive,
      title: "Trusted By thousands",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Optio repudiandae asperiores impedit."
    },
    {
      icon: home,
      title: "Wide Range Of Porperties",
      content: "Facilis, ducimus fuga ipsa cum cumque, ullam alias nemo maiores.Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: profit ,
      title: "Financing Made Easy",
      content: "officia est, in placeat nesciunt quibusdam velit vero.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]
  return (
    <Wrapper color={"#f7f7f7"} title={title} content={content}>
      <Stack direction={{sm: "row", xs: "column"}} justifyContent="center" alignItems="center" gap={4} flexWrap="wrap">
        {cardContent.map((card, index) => <Card key={index} icon={card.icon} title={card.title} content={card.content} />)}
         
      </Stack>
    </Wrapper>
   
  )
}

export default WhyChoUs