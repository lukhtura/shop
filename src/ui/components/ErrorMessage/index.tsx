// Styles
import useErrorMessageStyles from "./styles";

const ErrorMessage = () => {

  const classNames = useErrorMessageStyles();

  return (
    <div className={classNames.errorMessage}>
      <p>Oops! Something went wrong...</p>
    </div>
  );
}

export default ErrorMessage;
