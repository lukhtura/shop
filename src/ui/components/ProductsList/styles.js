import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "40px",
    flexWrap: "wrap"
  },
  product: {
    textDecoration: "none"
  }
});