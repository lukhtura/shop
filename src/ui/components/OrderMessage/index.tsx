// Core
import { useEffect, useState } from "react";
import { useAppSelector } from "engine/redux/hooks";

// Types
import { OrderStatus } from "engine/redux/slices/cartSlice";

// Styles
import useOrderMessageStyles from "ui/components/OrderMessage/styles";

const OrderMessage = () => {

  const [isMessage, setIsMessage] = useState(false);
  const headerHeight = useAppSelector(state => state.technical.headerHeight);
  const orderStatus = useAppSelector(state => state.cart.orderStatus);

  const topPositionWhenIsMessage = `${parseInt(headerHeight) + 10}px`;

  const classNames = useOrderMessageStyles();

  function showMessage(): void {
    setIsMessage(true);

    const timerID = setTimeout((): void => {
      setIsMessage(false);

      clearTimeout(timerID);
    }, 3000);
  }

  useEffect((): void => {
    if (orderStatus !== OrderStatus.Idle) {
      showMessage();
    }
  }, [orderStatus]);

  if (!isMessage) return null;

  return (
    <div
      className={
        orderStatus === OrderStatus.Succes
          ? `${classNames.container} ${classNames.positive}`
          : `${classNames.container}  ${classNames.negative}`
      }
      style={{
        top: topPositionWhenIsMessage
      }}>
      {
        orderStatus === OrderStatus.Succes && <p className={classNames.text}>Your order is recieved! Thank you :)</p>
      }
      {
        orderStatus === OrderStatus.Error && <p className={classNames.text}>Something went wrong. Try again or contact us!</p>
      }
    </ div >
  );
}

export default OrderMessage;