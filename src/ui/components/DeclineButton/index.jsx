//Styles
import { useStyles } from "./style";

function DeclineButton({ className, children, onClick }) {

  const classNames = useStyles();

  return (
    <button
      onClick={onClick}
      className={`${classNames.removeBtn} ${className}`}
    >
      {children}
    </button>
  );
}

export default DeclineButton;