import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useCloseButtonStyles = createUseStyles({
  closeButton: {
    width: "13px",
    position: "absolute",
    top: "5px",
    right: "5px",
    cursor: "pointer",
    transition: "0.3s",

    "& img": {
      transition: "0.3s",
      width: "13px",

      "&:hover": {
        transform: "rotateZ(90deg)"
      }
    }
  }
});

export default useCloseButtonStyles;