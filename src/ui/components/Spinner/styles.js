import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  spinner: {
    width: "100px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
});