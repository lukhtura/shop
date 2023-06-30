import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useCartPageTotalModuleStyles = createUseStyles({
  permanentText: {
    margin: "0 0 8px",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "28px"
  },
  dynamicText: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
  },
});

export default useCartPageTotalModuleStyles;