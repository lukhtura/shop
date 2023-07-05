import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useMainPageStyles = createUseStyles((theme: Theme) => ({
  mainPageContainer: {
    marginTop: "80px"
  },



  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    mainPageContainer: {
      marginTop: "50px"
    },

  }
}));

export default useMainPageStyles;