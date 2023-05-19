import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  container: {
    marginTop: "160px",
    display: "flex",
  },
  rightSide: {
    width: "270px",
    display: "flex",
    justifyContent: "space-between",
  },
  quantityContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: "0",
    fontSize: "37px",
    width: "45px",
    height: "45px",
    background: theme.colors.background,
    border: "1px solid black",
    cursor: "pointer",
    fontWeight: "100",
  },
  quantity: {
    fontWeight: "500",
    fontSize: "24px",
  }
}));