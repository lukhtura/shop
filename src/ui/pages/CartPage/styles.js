import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  headerContainer: {
    margin: "80px 0 55px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  header: {
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
    position: "relative",
    background: theme.colors.primary,
    color: "white",
    border: "none",
    height: "45px",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      background: theme.colors.primaryHover
    }
  },
}));