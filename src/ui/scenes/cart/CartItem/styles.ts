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
    gap: "10px",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
  },
  imageCounterContainer: {
    width: "270px",
    gap: "24px",
    display: "flex",
  },
  infoContainer: {
    display: "block"
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
    color: theme.colors.primary
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
    fontWeight: "700",
    fontSize: "27px",
    margin: "0",
    color: theme.colors.primary
  },
  attrColor: {
    width: "16px",
    height: "16px",
    borderRadius: "20px",
    border: "1px solid #d5cece"
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
    margin: "0 auto"
  },

  [`@media(max-width: ${theme.breakpoints.sm})`]: {
    cartItem: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: "5%",
      padding: "16px 0",
      minHeight: "auto"
    },
    imageCounterContainer: {
      width: "auto",
      order: "1",
      flexDirection: "column-reverse",
      justifyContent: "space-around"
    },
    image: {
      width: "100%"
    },
    counterContainer: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
    },
    counterButton: {
      width: "20px",
      height: "20px"
    },
    counterNumber: {
      fontSize: "20px"
    },
    infoContainer: {
      order: "2",
    },
    brand: {
      marginBottom: "10px",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "22px",
    },
    name: {
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "26px",
      margin: "8px 0 10px",
    },
    price: {
      margin: "10px 0",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "22px",
    },
    attribute: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    },
    attrName: {
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "18px",
    },
    attrValue: {
      color: theme.colors.primary,
      fontWeight: "700",
      fontSize: "24px",
    },
  },


  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    cartItem: {
      padding: "10px",
      gridTemplateColumns: "80px 1fr"
    },
    brand: {
      fontSize: "16px",
      lineHeight: "20px",
    },
    name: {
      fontSize: "20px",
      lineHeight: "22px",
    },
    price: {
      fontSize: "18px",
      lineHeight: "20px",
    },
    attribute: {
      gap: "5px",
    },
    attrName: {
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "18px",
    },
    attrValue: {
      fontWeight: "600",
      fontSize: "16px",
    },
  }
}));

export default useCartItemStyles;