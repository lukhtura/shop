import { createUseStyles } from "react-jss";

const useProductPageGalleryStyles = createUseStyles({
  gallery: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  galleryItem: {
    marginBottom: "40px",
    width: "80px",
    height: "80px",
    cursor: "pointer",
    transition: "0.1s",

    "&:hover": {
      "& img": {
        width: "90px",
        height: "90px",
      }
    }
  },
  galleryItemImg: {
    objectFit: "cover",
    width: "80px",
    height: "80px"
  },
  activeImgContainer: {
    width: "49%",
    position: "relative"
  },
  activeImg: {
    width: "100%",
    height: "70vh",
    objectFit: "contain",
  },
  sliderButtonsContainer: {
    width: "100%",
    height: "40px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "space-between"
  },
  sliderButton: {
    width: "40px",
  },
  previousSliderButton: {
    transform: "rotateY(180deg)",
  },
  sliderOverflow: {
    width: "49%",
    overflow: "hidden"
  },
  activeSlide: {
    display: "flex",
  },
  disabled: {
    opacity: "0,5"
  }
});

export default useProductPageGalleryStyles;