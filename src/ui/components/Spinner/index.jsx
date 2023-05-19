//Style
import { useStyles } from "./styles";
import spinner from "assets/spinner.svg";

function Spinner() {
  const classes = useStyles();
  return (
    <img src={spinner} alt="loading" className={classes.spinner} />
  );
}

export default Spinner;