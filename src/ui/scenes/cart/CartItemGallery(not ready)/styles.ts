import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  {
    container: {
      position: "relative",
      height: "288px",
      width: "192px",
      overflow: "hidden",
    },
    galleryFlow: {
      display: "flex",
      height: "288px",
    },
    nextBtn: {
      position: "absolute",
      bottom: "15px",
      opacity: "0.1",
      right: "15px",
    },
    prevBtn: {
      position: "absolute",
      bottom: "15px",
      opacity: "0.1",
      transform: "rotate(180deg)",
      right: "45px",
    },
    galleryItem: {
      objectFit: "contain",
      width: "200px",
      height: "288px",
    },
  }
)