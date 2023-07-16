//Styles
import closeIcon from "assets/icons/close.png";
import useCloseButtonStyles from "ui/components/CloseButton/styles";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {

  const classNames = useCloseButtonStyles();

  return (
    <div
      className={classNames.closeButton}
      onClick={onClick}>
      <img src={closeIcon} alt="close" />
    </div>
  );
}

export default CloseButton;