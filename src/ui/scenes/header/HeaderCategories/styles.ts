import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useHeaderCategoriesStyles = createUseStyles((theme: Theme) => ({
  categoriesContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "16px",
    paddingLeft: "20px"
  },
  categoryButton: {
    textDecoration: "none",
    color: theme.colors.text,
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  categoryButtonInner: {
    display: "flex",
    height: "100%",
    alignItems: "center",

    "&:hover": {
      textDecoration: "none",
      color: theme.colors.primary,
      borderBottom: `2px solid ${theme.colors.primary}`
    }
  },
  activeCategory: {
    textDecoration: "none",
    color: theme.colors.primary,
    borderBottom: `2px solid ${theme.colors.primary}`
  },

  [`@media(max-width: ${theme.breakpoints.sm})`]: {
    categoriesContainer: {
      gap: 0,
      flexDirection: "column",
      padding: "10px 0",
      background: theme.colors.background,
      boxShadow: "0px 4px 35px rgb(168 172 176 / 19%)",
      transition: "0.3s"
    },
    categoryButton: {
      display: "flex",
      width: "114px",
      height: "45px",
      fontWeight: "500",
      fontSize: "18px",

      "&:hover": {
        background: theme.colors.dropdownHover,
      }
    },
    categoryButtonInner: {
      paddingLeft: "15px",
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",

      "&:hover": {
        textDecoration: "none",
        borderBottom: "none"
      }
    },
    activeCategory: {
      borderBottom: "none"
    },
  },
}));

export default useHeaderCategoriesStyles;
