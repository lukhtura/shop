import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useProductPageStyles = createUseStyles((theme: Theme) => ({
  container: {
    marginTop: "75px",
    display: "flex",
    justifyContent: "center",
    gap: "14px"
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
  },


  [`@media(max-width: ${theme.breakpoints.sm})`]: {
    container: {
      marginTop: "0px",
      flexDirection: "column",
      gap: "50px"
    },
  },
}));

export default useProductPageStyles;