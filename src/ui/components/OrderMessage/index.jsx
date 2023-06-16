//Core
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Styles
import { useStyles } from "./styles";



function OrderMessage() {

  const [isMessage, setIsMessage] = useState(false);
  const headerHeight = useSelector(state => state.header.headerHeight);
  const orderStatus = useSelector(state => state.cart.orderStatus)

  const classNames = useStyles();

  const topPositionWhenIsMessage = `${parseInt(headerHeight) + 10}px`;

  function showMessage() {
    setIsMessage(true);

    const timerID = setTimeout(() => {
      setIsMessage(false);
      clearTimeout(timerID);
    }, 3000);
  }

  useEffect(() => {
    if (orderStatus !== "idle") {
      showMessage();
    }
  }, [orderStatus]);



  if (!isMessage) return null;

  if (orderStatus === "succes") {
    return (
      <div
        className={`${classNames.container} ${classNames.positive}`}
        style={{ top: topPositionWhenIsMessage }}>
        <p className={classNames.text}>Your order is recieved! Thank you :)</p>
      </ div >
    );
  } else if (orderStatus === "error") {
    return (
      <div
        className={`${classNames.container}  ${classNames.negative}`}
        style={{ top: topPositionWhenIsMessage }}>
        <p className={classNames.text}>Something went wrong. Try again or contact us!</p>
      </div>
    );
  }
}

export default OrderMessage;