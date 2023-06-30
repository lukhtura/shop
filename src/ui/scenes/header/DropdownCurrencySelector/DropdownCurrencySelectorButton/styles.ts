import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useDropdownCurrencySelectorButtonStyles = createUseStyles({
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
    transition: "0.1s"
  },
  currencyArrowOpen: {
    display: "flex",
    transition: "0.1s",
    transform: "translateY(10px)"
  },
  currencyArrowImg: {
    width: "10px"
  },
});

export default useDropdownCurrencySelectorButtonStyles;