import { Modal, Stack } from "@mui/material";
import { Box } from "@mui/system";
import GalleryStyle from "./gallery.module.sass";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const GModal = ({
  open,
  handleClose,
  clickImg,
  clickImgIndex,
  prevImg,
  nextImg,
  allPhotosLength,
}) => {
  return (
    <>
      {/* Gallery Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          sx={{ height: "100vh" }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box onClick={prevImg}>
            <ArrowLeftIcon
              sx={{
                fontSize: "90px",
                color: "#ccc",
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            />
          </Box>

          <Box sx={{ width: "68%" }}>
            <CloseIcon
              onClick={handleClose}
              sx={{
                fontSize: "60px",
                color: "#ccc",
                position: "fixed",
                right: "0",
                top: "0",
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            />
            <img
              src={clickImg}
              alt="gallery_img"
              className={GalleryStyle.gMImg}
            />
            <h4 className={GalleryStyle.imgCount}>
              {" "}
              {clickImgIndex + 1} of {allPhotosLength}{" "}
            </h4>
          </Box>

          <Box onClick={nextImg}>
            <ArrowRightIcon
              sx={{
                fontSize: "90px",
                color: "#ccc",
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            />
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default GModal;
