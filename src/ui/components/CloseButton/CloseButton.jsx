import closeIcon from "assets/icons/close.png";
import { useStyles } from "./styles";

function CloseButton({ onClick }) {
  const classNames = useStyles();
  return (
    <div
      className={classNames.closeButton}
      onClick={onClick}>
      <img src={closeIcon} alt="close" />
    </div>
  )
}

export default CloseButton;