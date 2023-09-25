// Types
import { PropsWithChildren } from 'react';

// Styles
import useButtonStyles from './styles';

interface ButtonProps {
  variant: 'accept' | 'decline' | 'secondary';
  onClick?: () => void;
  className?: string;
  isDisabled?: boolean;
}

const Button = ({
  children,
  variant,
  onClick,
  className,
  isDisabled,
}: PropsWithChildren<ButtonProps>) => {
  const classNames = useButtonStyles();

  return (
    <button
      onClick={onClick}
      className={`${classNames.button} ${classNames[variant]} ${className}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
