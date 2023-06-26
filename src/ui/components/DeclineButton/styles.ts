import { createUseStyles } from "react-jss";



const useDeclineButtonStyles = createUseStyles(theme => ({
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