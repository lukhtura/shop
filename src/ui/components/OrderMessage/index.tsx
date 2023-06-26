//Core
import { useEffect, useState } from "react";
import { useAppSelector } from "engine/redux/hooks";

//Types
import { OrderStatus } from "engine/types/products";

//Styles
import useOrderMessageStyles from "ui/components/OrderMessage/styles";



const OrderMessage: React.FC = () => {

  const [isMessage, setIsMessage] = useState(false);
  const headerHeight = useAppSelector(state => state.header.headerHeight);
  const orderStatus = useAppSelector(state => state.cart.orderStatus);

  const classNames = useOrderMessageStyles();

  const topPositionWhenIsMessage = `${parseInt(headerHeight) + 10}px`;

  function showMessage(): void {
    setIsMessage(true);

    const timerID = setTimeout((): void => {
      setIsMessage(false);
      clearTimeout(timerID);
    }, 3000);
  }

  useEffect((): void => {
    if (orderStatus !== "idle") {
      showMessage();
    }
  }, [orderStatus]);



  if (!isMessage) return null;

  if (OrderStatus.Succes) {
    return (
      <div
        className={`${classNames.container} ${classNames.positive}`}
        style={{ top: topPositionWhenIsMessage }}>
        <p className={classNames.text}>Your order is recieved! Thank you :)</p>
      </ div >
    );
  } else if (OrderStatus.Error) {
    return (
      <div
        className={`${classNames.container}  ${classNames.negative}`}
        style={{ top: topPositionWhenIsMessage }}>
        <p className={classNames.text}>Something went wrong. Try again or contact us!</p>
      </div>
    );
  } else {
    return null;
  }
}

export default OrderMessage;