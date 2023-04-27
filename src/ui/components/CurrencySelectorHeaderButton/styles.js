import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  currencySelectorBtn: {
    display: "flex",
    gap: "5px",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "160%",
    cursor: "pointer",
  },
  currencyArrow: {
    display: "flex",
    transition: "0.3s"
  },
  currencyArrowRotated: {
    display: "flex",
    transition: "0.3s",
    transform: "rotate(-180deg)"
  },
  currencyArrowImg: {
    width: "10px"
  },
});