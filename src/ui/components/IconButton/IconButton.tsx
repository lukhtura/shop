// Types
import { PropsWithChildren } from 'react';

//Styles
import useIconButtonStyles from './styles';

interface IconButtonProps {
  onClick: () => void;
  alt: string;
  className?: string;
}

const IconButton = ({
  onClick,
  children,
  alt,
  className,
}: PropsWithChildren<IconButtonProps>) => {
  const classNames = useIconButtonStyles();

  return (
    <button
      className={`${classNames.iconButton} ${className}`}
      onClick={onClick}
    >
      {typeof children === 'string' && <img src={children} alt={alt} />}
    </button>
  );
};

export default IconButton;
