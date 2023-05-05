import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
  header: {
    width: "100%",
    padding: "0 20px",
    background: "#fff",
    zIndex: "120",
    position: "fixed",
    top: "0",
    left: "0",
    webkitBoxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)",
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)"
  },
  inner: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "1440px",
    maxHeight: "80px",
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    display: "flex",
    alignItems: "center"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "24px"
  },
});