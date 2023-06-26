import { createUseStyles } from "react-jss";

const useSpinnerStyles = createUseStyles({
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
});

export default useSpinnerStyles;