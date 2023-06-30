import { createUseStyles } from "react-jss";
import { Theme } from "theme";



const useDeclineButtonStyles = createUseStyles((theme: Theme) => ({
  removeBtn: {
    backgroundColor: theme.colors.danger,
    border: "none",
    cursor: "pointer",
    color: "white",

    "&:hover": {
      backgroundColor: "#ff4c4c",
    },
  },
}));



export default useDeclineButtonStyles;