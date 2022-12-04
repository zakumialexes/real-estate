import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryStyle from "./gallery.module.sass";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import GModal from "./modal";
import api from "../../api/api"

const Gallery = () => {
  const [galleryDatas, setGalleryDatas] = useState([]);

  useEffect(() => {
    api.get("/gallery").then((res) => {
      setGalleryDatas(res.data);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [clickImg, setClickImg] = useState("");
  const [clickImgIndex, setClickImgIndex] = useState(0);

  const handleOpen = (index) => {
    setOpen(true);
    setClickImgIndex(index);
    setClickImg(galleryDatas[index].gallery_img);
  };

  const handleClose = () => setOpen(false);

  const prevImg = () => {
    clickImgIndex === 0
      ? setClickImgIndex(galleryDatas.length - 1)
      : setClickImgIndex(clickImgIndex - 1);
  };
  const nextImg = () => {
    clickImgIndex === galleryDatas.length - 1
      ? setClickImgIndex(0)
      : setClickImgIndex(clickImgIndex + 1);
  };
  useEffect(() => {
    if (clickImg !== "") {
      setClickImg(galleryDatas[clickImgIndex].gallery_img);
    }
  }, [clickImgIndex]);

  return (
    <>
      {/* Gallery Body */}
      <section className={GalleryStyle.galleryBody}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Gallery Images */}
            {galleryDatas.map((g, i) => {
              return (
                <Grid item key={g.id} xs={12} sm={6} lg={4}>
                  <Box
                    className={GalleryStyle.imgBox}
                    onClick={() => handleOpen(i)}
                  >
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
              );
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
        allPhotosLength={galleryDatas.length}
      />
    </>
  );
};

export default Gallery;
