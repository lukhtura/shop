import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles((theme) => ({
  container: {
    width: "295px"
  },
  brand: {
    margin: "0 0 16px",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "27px"
  },
  name: {
    margin: "16px 0 20px",
    fontWeight: "400",
    fontSize: "30px",
    lineHeight: "27px"
  },
  priceLabel: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "18px",
    margin: "0 0 10px",
  },
  priceNumber: {
    margin: "20px 0",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px"
  },
  addToCartBtn: {
    width: "100%",
    background: theme.colors.primary,
    color: "white",
    border: "none",
    height: "50px",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      background: theme.colors.primaryHover
    },

    "&:disabled": {
      background: "#d1ded4",
      pointerEvents: "none"
    }
  },
  message: {
    color: theme.colors.primary,
    fontSize: "20px",
    fontWeight: 500
  }
}));