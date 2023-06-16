import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(theme => ({
  headerContainer: {
    margin: "50px 0 15px",
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
    margin: "60px 0 0 auto",
    width: "270px",
    height: "160px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  orderBtn: {
    position: "relative",
    height: "45px",
  },
  removeBtn: {
    height: "25px",
    padding: "0 5px"
  }
}));