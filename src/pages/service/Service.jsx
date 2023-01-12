import React from "react"
import { ImageListItem, Box, imageListItemClasses } from "@mui/material"
import ServiceStyle from "./Service.module.scss"
import { ThemeProvider, createTheme } from "@mui/system"
import { useGetItemsQuery } from "../../api/api"

const Service = () => {
    const { data: items, isSuccess } = useGetItemsQuery()
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1300,
            },
        },
    })
    if (isSuccess)
        return (
            <ThemeProvider theme={theme}>
                <Box
                    className={ServiceStyle.box}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(1,1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3,1fr)",
                            lg: "repeat(3, 1fr)",
                            xl: "repeat(3, 1fr)",
                        },
                        [`& .${imageListItemClasses.root}`]: {
                            display: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    {items.map((item) => (
                        <ImageListItem
                            className={ServiceStyle.imgContainer}
                            mobile={6}
                            tablet={4}
                            desktop={3}
                            laptop={3}
                        >
                            <img src={item.image} className={ServiceStyle.image} />
                            <p>{item.title}</p>
                        </ImageListItem>
                    ))}
                </Box>
            </ThemeProvider>
        )
}

export default Service
