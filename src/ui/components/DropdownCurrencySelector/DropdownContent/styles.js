import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  selector: {
    background: "white",
    position: "absolute",
    top: "30px",
    left: "-20px",
    padding: "10px 0",
    boxShadow: "0px 4px 35px rgb(168 172 176 / 19%)",
  },
  inner: {
    display: "flex",
    flexDirection: "column"
  },
  item: {
    width: "114px",
    height: "45px",
    fontWeight: "500",
    fontSize: "18px",
    color: "#1d1f22",
    cursor: "pointer",
    padding: "12px 18px 8px 20px",
    transition: "0.3s",

    "&:hover": {
      background: "#eeeeee"
    }
  },
});