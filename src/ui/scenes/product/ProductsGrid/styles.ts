import { createUseStyles } from "react-jss";

const useProductsGridStyles = createUseStyles(theme => ({
  headerText: {
    marginBottom: "40px",
    fontSize: "42px",
    lineHeight: "160%",
    color: theme.colors.text
  },

  productsGrid: {
    display: "grid",
    width: "100%",
    // gridTemplateColumns: "repeat(3, 33%)",
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
  },

  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    headerText: {
      fontSize: "32px",
    },
  },
}));

export default useProductsGridStyles;