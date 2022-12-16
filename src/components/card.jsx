import React, { useState } from "react"
import { Card, CardMedia, CardContent, Box, Avatar, Typography, Divider, Stack, Grid } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { styled } from "@mui/system"
import { heart, transfer } from "../pages/home/sections/svg"
import style from "./card.module.scss"
const EsCardIcon = ({ path, isClicked }) => {
    const icon = {
        color: isClicked ? "#ff5a5f" : "white",
    }
    return (
        <svg height="35" width="35" viewBox="-30 -670 600 950">
            <path transform="scale(1,-1)" fill={`${icon.color}`} d={path} />
        </svg>
    )
}

const EsCard = ({
    property,
    propertyImage,
    type,
    location,
    price,
    sale,
    rent,
    bed,
    bath,
    area,
    poster,
    posterImage,
    date,
    featured,
}) => {
    const [isFav, setIsFav] = useState(false)
    const [isTransfer, setIsTransfer] = useState(false)
    const ActionBtn = styled(Box)({
        width: 35,
        height: 35,
        border: "1px solid transparent",
        backgroundColor: "#0F151F",
        borderRadius: 8,
        opacity: 0.502,
        display: "grid",
        placeItems: "center",
        color: "white",
    })
    const styles = {
        clicked: {
            color: "#ff5a5f",
            border: "1px solid #ff5a5f",
            transition: "1s",
        },
        image: {
            zIndex: 0,
            objectFit: "cover",
            width: "100%",
            opacity: 0.6,
        },
        chip: {
            bgcolor: "rgb(62, 76, 102)",
            padding: "3px 7px",
            borderRadius: "3px",
        },
        actionBtns: {
            position: "absolute",
            left: 0,
            bottom: 0,
            fontWeight: "bold",
            fontSize: "1.5em",
            margin: "0 0 0.5em 1em",
        },
        feature: {
            bgcolor: "#ff5a5f",
            padding: "3px 7px",
            borderRadius: "3px",
        },
    }

    return (
        <Card className={style.wrapper}>
            <Box component="div" className={style.estateImageWrapper}>
                <CardMedia component="img" image={propertyImage} alt="hello" sx={styles.image} />
                <Grid container sx={{ position: "absolute", top: 0, left: 0, height: "100%", boxSizing: "border-box" }}>
                    <Grid item xs={12} sx={{ position: "relative", margin: "1em 0 0 1em" }}>
                        <Stack component="div" direction="row" gap={2} sx={{ fontSize: "14px", color: "white" }}>
                            {rent && <Box sx={styles.chip}>For Rent</Box>}
                            {sale && <Box sx={styles.chip}>For Sale</Box>}
                            {featured && <Box sx={styles.feature}>Featured</Box>}
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <Typography variant="h6" color="white" sx={styles.actionBtns}>
                            ${price}
                            <small>/mo</small>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <Stack
                            direction="row"
                            component="div"
                            gap={3}
                            sx={{ position: "absolute", right: 0, bottom: 0, margin: "0 2em 1em 0" }}
                        >
                            <ActionBtn
                                onClick={() => {
                                    setIsTransfer((pre) => !pre)
                                }}
                                sx={isTransfer && styles.clicked}
                            >
                                <EsCardIcon path={transfer} isClicked={isTransfer} />
                            </ActionBtn>
                            <ActionBtn
                                onClick={() => {
                                    setIsFav((pre) => !pre)
                                }}
                                sx={isFav && styles.clicked}
                            >
                                <EsCardIcon path={heart} isClicked={isFav} />
                            </ActionBtn>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <CardContent sx={{ padding: "20px", color: "#777777" }}>
                <Typography variant="subtitle2" sx={{ color: "#ff5a5f", marginBottom: "5px" }}>
                    {type}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#484848", marginBottom: "5px" }}>
                    {property}
                </Typography>
                <Box display="flex" sx={{ marginBottom: "10px" }}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <Typography variant="subtitle2" sx={{ display: "inline", marginLeft: 1 }}>
                        {location}
                    </Typography>
                </Box>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={4}
                    sx={{ marginBottom: "5px" }}
                >
                    <Typography variant="subtitle2">Beds: {bed}</Typography>
                    <Typography variant="subtitle2">Baths: {bath}</Typography>
                    <Typography variant="subtitle2">Sq Ft: {area}</Typography>
                </Stack>
            </CardContent>
            <Divider />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "20px", color: "#777777" }}
            >
                <Stack direction="row" alignItems="center" gap={1}>
                    <Avatar alt="photo" src={posterImage} />
                    <Typography>{poster}</Typography>
                </Stack>
                <Typography>{date}</Typography>
            </Stack>
        </Card>
    )
}
export default EsCard
