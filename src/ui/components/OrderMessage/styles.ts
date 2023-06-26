import { createUseStyles } from "react-jss";

const useOrderMessageStyles = createUseStyles(theme => ({
  container: {
    maxWidth: "500px",
    height: "40px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px",
    borderRadius: "10px",
    transition: "0,3s"
  },
  text: {
    textAlign: "center",
    color: "white"
  },
  positive: {
    backgroundColor: theme.colors.primary,
    boxShadow: `0px 3px 17px 0px ${theme.colors.primary}`,
  },
  negative: {
    backgroundColor: theme.colors.danger,
    boxShadow: `0px 3px 17px 0px ${theme.colors.danger}`,
  }
}));

export default useOrderMessageStyles;