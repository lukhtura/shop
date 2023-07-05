import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useCartPageTotalModuleStyles = createUseStyles((theme: Theme) => ({
  totalModule: {
    margin: "60px 0 0 auto",
    width: "270px",
    height: "160px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  permanentText: {
    marginBottom: "8px",

    fontSize: "24px",
    lineHeight: "28px"
  },
  dynamicText: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
  },
  orderBtn: {
    position: "relative",
    height: "45px",
  },


  [`@media(max-width: ${theme.breakpoints.sm})`]: {
    totalModule: {
      margin: "20px 0 0 auto",
    },
    permanentText: {
      fontSize: "20px",
      lineHeight: "22px"
    },
    dynamicText: {
      fontWeight: "600",
      fontSize: "22px",
      lineHeight: "24px",
    },
  },

  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    totalModule: {
      margin: "10px 0",
      width: "100%",
      gap: "5px"
    },
    permanentText: {
      margin: "0",
      fontSize: "16px",
      lineHeight: "20px"
    },
    dynamicText: {
      margin: "0",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "20px",
    },
    orderBtn: {
      margin: "0 auto",
      width: "80%",
      height: "40px"
    },
  },
}));

export default useCartPageTotalModuleStyles;