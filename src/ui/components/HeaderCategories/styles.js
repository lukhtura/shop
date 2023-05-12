import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  categoriesContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px"
  },
  categoryButton: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  categoryButtonInner: {
    display: "flex",
    height: "80px",
    alignItems: "center",

    "&:hover": {
      textDecoration: "none",
      color: "#5ece7b",
      borderBottom: "2px solid #5ece7b"
    }
  },
  activeCategory: {
    textDecoration: "none",
    color: "#5ece7b",
    borderBottom: "2px solid #5ece7b"
  },
});