import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  categoriesContainer: {
    display: "flex",
    width: "234px",
    height: "80px",
    justifyContent: "space-around"
  },
  category: {
    display: "flex",
    height: "80px",
    alignItems: "center",

    "&:hover": {
      textDecoration: "none",
      color: "#5ece7b",
      borderBottom: "2px solid #5ece7b"
    }
  },
  categoryInner: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
});