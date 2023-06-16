import { useStyles } from "./styles"

function SubmitButton({ disabled, className, onClick, children }) {

  const classNames = useStyles();

  return <button
    onClick={onClick}
    className={`${classNames.button} ${className}`}
    type="submit"
    disabled={disabled}>
    {children}
  </button>
}

export default SubmitButton;