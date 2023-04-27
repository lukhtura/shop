import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  modalOverflow: {
    transition: "all 300ms",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "100",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "rgba(57, 55, 72, 0.22)",
  },
  modal: {
    zIndex: "1000",
    padding: "5px 16px",
    marginRight: "75px",
    marginTop: "80px",
    minHeight: "300px",
    width: "325px",
    position: "absolute",
    right: "75px",
    backgroundColor: "white",
  },
  header: {
    margin: "32px 0",
  },
  itemsQuantity: {
    fontWeight: "500",
    fontSize: "16px"
  },
  cartListContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "40px",
    overflow: "auto",
    maxHeight: "400px",
  },
  totalPriceContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  totalPriceText: {
    margin: "0",
    fontWeight: "700",
  },
  buttonContainer: {
    margin: "32px 0",
    display: "flex",
    justifyContent: "space-between",
    minWidth: "293px",
  },
  button: {
    width: "140px",
    height: "43px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
  },
  viewBtn: {
    background: "#ffffff",
    border: "1px solid #1d1f22",
  },
  checkoutBtn: {
    background: "#5ece7b",
    color: "white",
    border: "none",
    transition: "0.3s",

    "&:hover": {
      background: "#439058",
    },

    "&:disabled": {
      background: "#d1ded4",
      pointerEvents: "none"
    }
  },
  displayNone: {
    display: "none",
  }
});