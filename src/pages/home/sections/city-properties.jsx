import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import style from './city-properties.module.scss'
import image1 from '../../../assets/home/findproperties/pc1.jpg'
import image2 from '../../../assets/home/findproperties/pc2.jpg'
import image3 from '../../../assets/home/findproperties/pc3.jpg'
import image4 from '../../../assets/home/findproperties/pc4.jpg'
import styled from '@emotion/styled'
import Wrapper from './wrapper'
const CityPro = () => {
  const Image = styled.img`
   vertical-align: middle;
   object-fit: cover;
   width: 100%;
   border-radius: 0;
  `
  const title = "Find Properties In These Cities"
  const content = "a adfuaiu aiue9q0u  9eur0qur q9eur90"
  return (
    <Wrapper title={title} content={content}>
        <Box sx={{display: "grid", placeItems: "center", padding: "20px 20px"}}>
        <Grid container gap={4} justifyContent="center" >
            <Grid item className={style.item} md={3} xs={12}>
                <Box className={style.image}><Image src={image1} alt="" /></Box>
                <Box className={style.overlay}>
                  <Box className={style.overlayContent} sx={{color: "white"}}>
                      <Typography variant="subtitle1">Miami</Typography>
                      <Typography variant="subtitle2">{12} properties</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item className={style.item} md={6} xs={12}>
                <Box className={style.image}><Image src={image2} alt="" /></Box>
                <Box className={style.overlay}>
                    <Box className={style.overlayContent} sx={{color: "white"}}>
                        <Typography>Miami</Typography>
                        <Typography>{12} properties</Typography>
                    </Box>
                </Box>
              </Grid>
              <Grid item className={style.item} md={6} xs={12}>
                <Box className={style.image}><Image src={image3} alt="" /></Box>
                <Box className={style.overlay}>
                    <Box className={style.overlayContent} sx={{color: "white"}}>
                        <Typography>Miami</Typography>
                        <Typography>{12} properties</Typography>
                    </Box>
                </Box>
              </Grid>
              <Grid item className={style.item} md={3} xs={12}>
                <Box className={style.image}><Image src={image4} alt="" /></Box>
                <Box className={style.overlay}>
                    <Box className={style.overlayContent} sx={{color: "white"}}>
                      <Typography>Miami</Typography>
                      <Typography>{12} properties</Typography>
                    </Box>
                </Box>
              </Grid>
          </Grid>
        </Box>
    </Wrapper>
  )
}

export default CityPro