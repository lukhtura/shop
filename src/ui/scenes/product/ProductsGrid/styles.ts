import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useProductsGridStyles = createUseStyles((theme: Theme) => ({
  headerText: {
    marginBottom: "40px",
    fontSize: "42px",
    lineHeight: "160%",
    color: theme.colors.text
  },

  productsGrid: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(auto-fill, 480px)",
    justifyItems: "center",
    justifyContent: "center"
  },



  [`@media(max-width: ${theme.breakpoints.xl})`]: {
    headerText: {
      paddingLeft: "20px",
    },
    productsGrid: {
      gridTemplateColumns: "repeat(auto-fill, 400px)",
    },
  },

  [`@media(max-width: ${theme.breakpoints.md})`]: {
    headerText: {
      fontSize: "36px",
    },
    productsGrid: {
      gap: "15px"
    },
  },


  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    headerText: {
      fontSize: "32px",
    },
    productsGrid: {
      gridTemplateColumns: "repeat(auto-fill, 100%)",
    },
  },
}));

export default useProductsGridStyles;