//Types
import { PropsWithChildren, FC } from "react";

//Styles
import useSubmitButtonStyles from "ui/components/SubmitButton/styles";



interface SubmitButtonProps {
  disabled?: boolean;
  className: string;
  onClick: () => void;
}

const SubmitButton: FC<PropsWithChildren<SubmitButtonProps>> = ({ disabled, className, onClick, children }) => {

  const classNames = useSubmitButtonStyles();

  return <button
    onClick={onClick}
    className={`${classNames.button} ${className}`}
    type="submit"
    disabled={disabled}>
    {children}
  </button>
}

export default SubmitButton;