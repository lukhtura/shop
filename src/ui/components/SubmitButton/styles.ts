import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useSubmitButtonStyles = createUseStyles((theme: Theme) => ({
  button: {
    position: "relative",
    background: theme.colors.primary,
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      background: theme.colors.primaryHover
    },

    "&:disabled": {
      background: "#d1ded4",
      pointerEvents: "none"
    },
  }
}));

export default useSubmitButtonStyles;