import { createUseStyles } from "react-jss";


const useCartModalButtonStyles = createUseStyles({
  cartBtn: {
    display: "flex",
    position: "relative",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "160%",
    cursor: "pointer",
  },
  counter: {
    width: "20px",
    height: "20px",
    backgroundColor: "black",
    borderRadius: "50px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "16px",
    position: "absolute",
    bottom: "10px",
    left: "10px"
  }
});

export default useCartModalButtonStyles;