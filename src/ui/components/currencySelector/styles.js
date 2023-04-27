import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  selector: {
    zIndex: "110",
    background: "white",
    position: "fixed",
    padding: "10px 0",
    width: "114px",
    height: "240px",
    top: "-160px",
    right: "323px",
    boxShadow: "0px 4px 35px rgb(168 172 176 / 19%)",
    transition: "all 0.3s ease-in-out"
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
  open: {
    transform: "translateY(235px)"
  }
});