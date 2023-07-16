// Core
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";

// Types
import { ActiveAttribute, ProductInCart } from "engine/types/products";

// Actions
import { addToCart, removeFromCart } from "engine/redux/slices/cartSlice";

// Utils
import { currencyExchanger } from "utils/currencyExchanger";

// Styles
import useCartItemStyles from "ui/scenes/cart/CartItem/styles";

const CartItem = (props: ProductInCart) => {

  const dispatch = useAppDispatch();
  const itemsInCart = useAppSelector(state => state.cart.itemsInCart);
  const currencySelected = useAppSelector(state => state.header.currencySelected);

  const classNames = useCartItemStyles();

  const countCartItemQuantity = (products: typeof itemsInCart, id: string): number => {

    let res = 0;

    products.forEach(item => {
      if (item.shopId === id) {
        res = item.quantity;
      }
    });
    return res;
  }

  const { shopId, name, brand, prices, gallery, activeAttributes } = props;

  const selectedCurrencyPrice = currencyExchanger(prices, currencySelected);

  const renderActiveAttributes = (attributes: ActiveAttribute[]): JSX.Element[] => {

    return attributes.map((item, i) => {
      if (item.name.toLowerCase() === "color") {
        return (
          <div className={classNames.attribute} key={i}>

            <p className={classNames.attrName}>
              {item.name.toUpperCase()}:
            </p>
            <span
              style={{
                backgroundColor: item.value,
                display: "inline-block"
              }}
              className={classNames.attrColor} key={i}>
            </span>
          </div>
        );
      }

      return (
        <div key={i} className={classNames.attribute}>
          <p className={classNames.attrName}>{item.name.toUpperCase()}:</p>
          <p className={classNames.attrValue}>{item.value}</p>
        </div>
      );
    });
  }

  return (

    <div className={classNames.cartItem}>

      {/* ITEM INFO */}
      <div className={classNames.infoContainer}>
        <h2 className={classNames.brand}>{brand}</h2>
        <h3 className={classNames.name}>{name}</h3>
        <p className={classNames.price}>{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>
        {renderActiveAttributes(activeAttributes)}
      </div>

      {/* IMAGE AND QUANTITY COUNTER */}
      <div className={classNames.imageCounterContainer}>

        {/* ITEM QUANTITY COUNTER */}
        <div className={classNames.counterContainer}>
          <div
            onClick={() => dispatch(addToCart(props))}
            className={classNames.counterButton}>+</div>
          <div className={classNames.counterNumber}>{countCartItemQuantity(itemsInCart, shopId)}</div>
          <div onClick={() => dispatch(removeFromCart(shopId))}
            className={classNames.counterButton}>-</div>
        </div>

        {/* ITEM IMAGE */}
        <img src={gallery[0]} alt={name} className={classNames.image} />
      </div>

    </div>
  );
}

export default CartItem;