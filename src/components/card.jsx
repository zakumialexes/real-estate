import React,{useState} from 'react'
import { Card, CardMedia, CardContent, Box, Avatar, Typography, Divider, Stack, Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/system'
import style from './card.module.scss'


const EsCard = ({property, propertyImage, type, location, price, sale, rent, bed, bath, area, poster, posterImage, date, featured}) => {
    const [isFav, setIsFav] = useState(false)
    const [isTransfer, setIsTransfer] = useState(false)
    const ActionBtn = styled(Box)({
        width: 35,
        height: 35,
        backgroundColor: "#0F151F",
        borderRadius: 8,
        opacity: 0.502,
        display: "grid",
        placeItems: "center",
        color: "white"
    })
    const clicked = {
        color:  "#ff5a5f",
        border:  "1px solid #ff5a5f", 
        transition: "1s"
    }
  return (
        <Card className={style.wrapper}>
                <Box component="div" className={style.estateImageWrapper}>
                    <CardMedia component="img" image={propertyImage} alt="hello" sx={{zIndex: 0, objectFit: "cover", width: "100%", opacity: 0.6}}/>
                    <Grid container sx={{position: "absolute", top: 0, left: 0,height:"100%", boxSizing: "border-box"}}>
                        <Grid item xs={12} sx={{position: "relative", margin: "1em 0 0 1em"}}>
                          <Stack component="div" direction="row" gap={2} sx={{ fontSize: "14px", color: "white"}}>
                                {rent && <Box sx={{ bgcolor: "rgb(62, 76, 102)", padding: "3px 7px", borderRadius: "3px" }}>For Rent</Box>}
                                {sale && <Box sx={{ bgcolor: "rgb(62, 76, 102)", padding: "3px 7px", borderRadius: "3px" }}>For Sale</Box>}
                                {featured && <Box sx={{bgcolor: "#ff5a5f", padding: "3px 7px", borderRadius: "3px"}}>Featured</Box>}
                          </Stack>
                        </Grid>    
                  <Grid item xs={6} sx={{ position: "relative" }}><Typography variant="h6" color="white" sx={{ position: "absolute", left: 0, bottom: 0, fontWeight: "bold", fontSize: "1.5em", margin: "0 0 0.5em 1em" }}>${price}<small>/mo</small></Typography></Grid>
                        <Grid item xs={6} sx={{position: "relative"}}>
                            <Stack direction="row" component="div" gap={3} sx={{position: "absolute", right: 0, bottom: 0, margin: "0 2em 1em 0"}}>
                                <ActionBtn onClick={() => { setIsFav((pre) => !pre) }} sx={isFav && clicked}><FontAwesomeIcon icon={faRightLeft} /></ActionBtn>
                                <ActionBtn onClick={() => { setIsTransfer((pre) => !pre) }} sx={isTransfer && clicked}><FontAwesomeIcon icon={faHeart} /></ActionBtn>
                            </Stack>
                                                          
                        </Grid>
                    </Grid> 
                </Box>
                <CardContent sx={{padding: "20px", color: "#777777"}}>
              <Typography variant='subtitle2' sx={{ color: "#ff5a5f", marginBottom: "5px" }}>{type}</Typography>
              <Typography variant='h6' sx={{ fontWeight: "bold", color: "#484848", marginBottom: "5px" }}>{property}</Typography>
                <Box display="flex" sx={{marginBottom: "10px"}}>
                         <FontAwesomeIcon icon={faLocationDot} />
                  <Typography variant='subtitle2' sx={{ display: "inline", marginLeft: 1 }}>{location}</Typography>         
                    </Box>
                    <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={4} sx={{marginBottom: "5px"}}>
                        <Typography variant='subtitle2' >Beds: {bed}</Typography>
                        <Typography variant='subtitle2' >Baths: {bath}</Typography>
                        <Typography variant='subtitle2' >Sq Ft: {area}</Typography>
                    </Stack>
                </CardContent>
                <Divider/>
                <Stack direction="row" alignItems ="center" justifyContent="space-between" sx={{padding:"20px", color: "#777777"}}>
                    <Stack direction="row" alignItems ="center" gap={1}>
                        <Avatar alt='photo' src={posterImage} />
                  <Typography>{poster}</Typography>
                    </Stack>
              <Typography>{date}</Typography>
                </Stack>
        </Card>
  )
}
export default EsCard


