import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles((theme) => ({
  header: {
    width: "100%",
    padding: "0 20px",
    background: theme.colors.background,
    zIndex: "120",
    position: "fixed",
    top: "0",
    left: "0",
    webkitBoxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)",
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)"
  },
  inner: {
    margin: "0 auto",
    maxWidth: "1440px",
    height: "80px",
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
    gap: "24px",
  },


  [`@media(max-width: ${theme.breakpoints.xl})`]: {
    buttonsContainer: {
      marginRight: "20px"
    },
  },

  [`@media(max-width: ${theme.breakpoints.md})`]: {
    inner: {
      height: "60px",
    },
  },
}));