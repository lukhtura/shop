import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  removeBtn: {
    height: "25px",
    backgroundColor: "red",
    border: "none",
    cursor: "pointer",
    color: "white",

    "&:hover": {
      backgroundColor: "#ff4c4c",
    },
  },
});