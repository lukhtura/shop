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
    alignItems: "centr"
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
}));

export default useProductPageGalleryStyles;