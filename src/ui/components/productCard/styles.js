import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
  card: {
    margin: "60px 0 0",
    padding: "16px",
    width: "386px",
    height: "444px",
    position: "relative",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      boxShadow: "0 4px 35px 0 rgba(168, 172, 176, 0.19)",
    },

    /* CART ICON VISIBLE */
    "&:hover $cartIcon": {
      opacity: "1",
    }
  },
  outStock: {
    opacity: "0.3",

    "&:hover": {
      pointerEvents: "none"
    }
  },
  outStockText: {
    textDecoration: "none",
    position: "absolute",
    top: "30%",
    left: "28%",
    fontSize: "24px",
    lineHeight: "160%",
    color: "black"
  },
  imgContainer: {
    width: "354px",
    height: "330px",
    marginBottom: "24px",
  },
  img: {
    width: "354px",
    height: "330px",
    objectFit: "contain"
  },
  descriptionContainer: {
    width: "354px",
    height: "58",
  },
  descriptionText: {
    margin: "0",
    fontSize: "18px",
    color: "#1d1f22",
  },
  name: {
    fontWeight: "300"
  },
  price: {
    fontWeight: "500"
  },
  cartIcon: {
    position: "absolute",
    bottom: "72px",
    right: "31px",
    opacity: "0",
    transition: "0.3s",
  }
});