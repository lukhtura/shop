//Types
import { PropsWithChildren } from "react";

//Styles
import useDeclineButtonStyles from "ui/components/DeclineButton/styles";

interface DeclineButtonProps {
  className: string;
  onClick: () => void;
}

const DeclineButton: React.FC<PropsWithChildren<DeclineButtonProps>> = ({
  className,
  children,
  onClick }) => {

  const classNames = useDeclineButtonStyles();

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