// Types
import { PropsWithChildren } from "react";

// Styles
import useSubmitButtonStyles from "ui/components/SubmitButton/styles";

interface SubmitButtonProps {
  disabled?: boolean;
  className: string;
  onClick: () => void;
}

const SubmitButton = (
  {
    disabled,
    className,
    onClick,
    children
  }: PropsWithChildren<SubmitButtonProps>) => {

  const classNames = useSubmitButtonStyles();

  return (
    <button
      onClick={onClick}
      className={`${classNames.button} ${className}`}
      type="submit"
      disabled={disabled}>
      {children}
    </button>
  );
}

export default SubmitButton;