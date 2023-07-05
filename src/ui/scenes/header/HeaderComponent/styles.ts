import { createUseStyles } from "react-jss";
import { Theme } from "theme";


const useHeaderStyles = createUseStyles((theme: Theme) => ({
  header: {
    width: "100%",
    paddingRight: "20px",
    background: theme.colors.background,
    zIndex: theme.zIndex.header,
    position: "sticky",
    top: "0",
    left: "0",
    webkitBoxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)",
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)"
  },
  inner: {
    margin: "0 auto",
    maxWidth: "1440px",
    height: "80px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyContent: "space-between"
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "24px",
  },


  // [`@media(max-width: ${theme.breakpoints.xl})`]: {
  //   buttonsContainer: {
  //     marginRight: "20px"
  //   },
  // },

  [`@media(max-width: ${theme.breakpoints.sm})`]: {
    inner: {
      height: "60px",
    },
  },
}));

export default useHeaderStyles;