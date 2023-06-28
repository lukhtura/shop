import { createUseStyles } from "react-jss";

const useHeaderCategoriesDropdownButtonStyles = createUseStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
}));

export default useHeaderCategoriesDropdownButtonStyles;