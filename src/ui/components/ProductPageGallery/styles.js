import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  gallery: {
    marginRight: "40px"
  },
  galleryItem: {
    marginBottom: "40px",
    width: "80px",
    height: "80px",
    cursor: "pointer",
    transition: "0.1s",

    "&:hover": {
      border: "3px solid #439058"
    }
  },
  galleryItemImg: {
    objectFit: "cover",
    width: "80px",
    height: "80px"
  },
  activeImgContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "100px"
  },
  activeImg: {
    width: "610px",
    height: "510px",
    objectFit: "contain",
  }
});