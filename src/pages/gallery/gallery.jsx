import { Container, Grid } from "@mui/material"
import { Box } from "@mui/system"
import { useState, useEffect } from "react"
import GalleryStyle from "./gallery.module.sass"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import GModal from "./modal"
import { useGetGalleryQuery } from "../../api/api"

const Gallery = () => {
    const { data: galleryData, isSuccess } = useGetGalleryQuery()
    const [open, setOpen] = useState(false)
    const [clickImg, setClickImg] = useState("")
    const [clickImgIndex, setClickImgIndex] = useState(0)

    const handleOpen = (index) => {
        setOpen(true)
        setClickImgIndex(index)
        setClickImg(galleryData[index].gallery_img)
    }

    const handleClose = () => setOpen(false)

    const prevImg = () => {
        clickImgIndex === 0 ? setClickImgIndex(galleryData.length - 1) : setClickImgIndex(clickImgIndex - 1)
    }
    const nextImg = () => {
        clickImgIndex === galleryData.length - 1 ? setClickImgIndex(0) : setClickImgIndex(clickImgIndex + 1)
    }
    useEffect(() => {
        if (clickImg !== "") {
            setClickImg(galleryData[clickImgIndex].gallery_img)
        }
    }, [clickImgIndex])
    if (isSuccess)
        return (
            <>
                {/* Gallery Body */}
                <section className={GalleryStyle.galleryBody}>
                    <Container maxWidth="lg">
                        <Grid container spacing={2}>
                            {/* Gallery Images */}
                            {galleryData.map((g, i) => {
                                return (
                                    <Grid item key={g.id} xs={12} sm={6} lg={4}>
                                        <Box className={GalleryStyle.imgBox} onClick={() => handleOpen(i)}>
                                            <img
                                                src={g.gallery_img}
                                                alt="gallery-image"
                                                className={GalleryStyle.gImg}
                                            />

                                            <Box className={GalleryStyle.gHoverBox}>
                                                <ZoomInIcon sx={{ fontSize: "70px", color: "#fff" }} />
                                            </Box>
                                        </Box>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Container>
                </section>

                <GModal
                    open={open}
                    handleClose={handleClose}
                    clickImg={clickImg}
                    clickImgIndex={clickImgIndex}
                    prevImg={prevImg}
                    nextImg={nextImg}
                    allPhotosLength={galleryData.length}
                />
            </>
        )
}

export default Gallery
