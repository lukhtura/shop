import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useHeaderCategoriesDropdownButtonStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
}));

export default useHeaderCategoriesDropdownButtonStyles;