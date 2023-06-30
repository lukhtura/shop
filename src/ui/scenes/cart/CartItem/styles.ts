import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useCartItemStyles = createUseStyles((theme: Theme) => ({
  cartContext: {
    brand: {
      color: "red"
    },
  },
  cartItem: {
    width: "100%",
    minHeight: "336px",
    margin: "0 auto",
    padding: "24px 0",
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
  },
  cartItemInnerRight: {
    width: "270px",
    gap: "24px",
    display: "flex",
  },
  brand: {
    margin: "0 0 16px",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "27px",
  },
  name: {
    fontWeight: "400",
    fontSize: "30px",
    lineHeight: "27px",
    margin: "16px 0 20px",
  },
  description: {
    margin: "16px 0 20px",
    fontWeight: "400",
    fontSize: "30px",
    lineHeight: "27px",
  },
  price: {
    margin: "20px 0",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",

    "@container (max-width: 5px)": {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "160%",
      margin: "4px 0 8px",
    }
  },
  attribute: {
    marginBottom: "10px",
  },
  attrName: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "18px",
    margin: "0",
  },
  attrValue: {
    color: "green",
    fontWeight: "700",
    fontSize: "27px",
    margin: "0",
  },
  attrColor: {
    width: "16px",
    height: "16px",
    marginTop: "5px",
  },
  counterContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterNumber: {
    fontWeight: "500",
    fontSize: "24px",
  },
  counterButton: {
    display: "flex",
    padding: "0",
    fontSize: "37px",
    width: "45px",
    height: "45px",
    background: theme.colors.background,
    border: "1px solid black",
    fontWeight: "100",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    }
  },
  image: {
    objectFit: "contain",
    width: "200px",
    height: "288px",
  },
}));

export default useCartItemStyles;