import { createUseStyles } from "react-jss";
import { Theme } from "theme";


const useProductCardStyles = createUseStyles((theme: Theme) => ({
  linkWrapper: {
    height: "100%",
    width: "100%",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    gridRowGap: "10px"
  },
  card: {
    padding: "16px",
    maxWidth: "386px",
    height: "444px",
    position: "relative",
    cursor: "pointer",
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    userSelect: "none",

    "&:hover": {
      boxShadow: "0 13px 35px 9px rgba(168, 172, 176, 0.19)",
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
  },
  descriptionText: {
    margin: "0",
    fontSize: "18px",
    color: theme.colors.text,
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
  },


  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    card: {
      margin: "0",
      padding: "0",
      maxWidth: "100%",
      justifyContent: "flex-start",
    },
    descriptionContainer: {
      textAlign: "center",
      height: "58px",
    },
    imgContainer: {
      maxWidth: "100%",
    },
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    },
  },
}));

export default useProductCardStyles;