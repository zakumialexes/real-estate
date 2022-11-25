import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import style from "./why-choose-us.module.scss"
import Wrapper from './wrapper'
import {home, profit, highFive} from './svg'
const Card = ({icon, title, content}) => {
  return (
    <Box className={style.card}>
      <Box className={style.icon}>
        {icon}
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
      icon: home,
      title: "Trusted By thousands",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Optio repudiandae asperiores impedit."
    },
    {
      icon: profit,
      title: "Wide Range Of Porperties",
      content: "Facilis, ducimus fuga ipsa cum cumque, ullam alias nemo maiores.Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: highFive,
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