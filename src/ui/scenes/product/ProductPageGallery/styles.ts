import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useProductPageGalleryStyles = createUseStyles((theme: Theme) => ({
  galleryContainer: {
    display: "flex",
    gap: "5%",
    padding: "0 20px"
  },
  gallery: {
    width: "15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "centr",
    gap: "40px"
  },
  galleryItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "80px",
    maxHeight: "80px",
    cursor: "pointer",
    transition: "0.1s",

    "&:hover": {
      "& img": {
        width: "95px",
      }
    }
  },
  galleryItemImg: {
    objectFit: "contain",
    width: "80px",
    transition: "0.3s"
  },
  activeImgContainer: {
    width: "80%",
    position: "relative"
  },
  activeImg: {
    width: "100%",
    maxWidth: "550px",
    height: "70vh",
    objectFit: "contain",
  },


  [`@media(max-width: ${theme.breakpoints.md})`]: {
    activeImgContainer: {
      width: "100%",
    },
  },

  [`@media(min-width: ${theme.breakpoints.xxl})`]: {
    activeImg: {
      maxWidth: "1000px",
    },
    galleryItem: {
      maxWidth: "90%",
      maxHeight: "90%",

      "&:hover": {
        "& img": {
          width: "100%",
        }
      }
    },
    galleryItemImg: {
      width: "90%",
    },
  },
}));

export default useProductPageGalleryStyles;