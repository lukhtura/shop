import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  modalOverflow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "1000",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    position: "relative",
    zIndex: "1000",
    padding: "5px 16px",
    // minHeight: "300px",
    maxWidth: "325px",
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
  closeButton: {
    width: "10px",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",

    "& img": {
      width: "10px",

      "&:hover": {
        width: "11px"
      }
    }
  },
  emptyMessage: {
    padding: "10px"
  }
});