import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  header: {
    margin: "160px 0 55px",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "40px"
  },
  totalModule: {
    margin: "32px 0 100px",
    width: "280px",
    height: "160px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  orderBtn: {
    background: "#5ece7b",
    color: "white",
    border: "none",
    height: "45px",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      "background": "#439058"
    }
  },
});