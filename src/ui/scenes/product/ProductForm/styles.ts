import { createUseStyles } from "react-jss";



const useProductFormStyles = createUseStyles(theme => ({
  "@keyframes blink": {
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
  container: {
    width: "25%",
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
  },
  priceNumber: {
    marginBottom: "15px",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px"
  },
  addToCartBtn: {
    width: "100%",
    height: "50px",
  },
  addMessage: {
    color: theme.colors.primary,
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "15px"
  },
  description: {
    marginTop: "20px"
  },
  outOfStockBlink: {
    color: theme.colors.danger,
    marginBottom: "10px",
    animation: "$blink 1.5s infinite",
  },
}));

export default useProductFormStyles;