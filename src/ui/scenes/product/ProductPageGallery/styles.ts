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
    gap: "40px",
    paddingBottom: "20px"
  },
  galleryItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "90px",
    // maxHeight: "80px",
    cursor: "pointer",
    transition: "0.1s",

    "&:hover": {
      "& img": {
        width: "100%",
      }
    }
  },
  galleryItemImg: {
    objectFit: "contain",
    width: "90%",
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