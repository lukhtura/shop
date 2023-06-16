//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { addToCart, removeFromCart } from "engine/redux/slices/cartSlice";

//Utils
import { currencyExchanger } from "utils/currencyExchanger";

//Styles
import { useStyles } from "./styles";



function CartItem(props) {

  const dispatch = useDispatch();
  const itemsInCart = useSelector(state => state.cart.itemsInCart);
  const currencySelected = useSelector(state => state.header.currencySelected);

  const classNames = useStyles();

  const countCartItemsQuantity = (data, id) => {
    let res = 0;
    data.forEach(item => {
      if (item.shopId === id) {
        res = item.quantity;
      }
    });
    return res;
  }

  const { shopId, name, brand, prices, gallery, activeAttrs } = props;

  const selectedCurrencyPrice = currencyExchanger(prices, currencySelected);

  const renderActiveAttrs = (attrs) => {

    return attrs.map((item, i) => {
      if (item.name === "Color") {
        return (
          <div className={classNames.attribute} key={i}>
            <p className={classNames.attrName}>
              {item.name.toUpperCase()}<br />
              <span
                style={{ backgroundColor: item.value, display: "inline-block" }}
                className={classNames.attrColor} key={i}>
              </span>
            </p>
          </div>
        );
      }

      return (
        <div key={i} className={classNames.attribute}>
          <p className={classNames.attrName}>{item.name.toUpperCase()}</p>
          <p className={classNames.attrValue}>{item.value}</p>
        </div>
      );
    });
  }

  return (

    <div className={classNames.cartItem}>

      {/* ITEM INFO */}
      <div>
        <h2 className={classNames.brand}>{brand}</h2>
        <h3 className={classNames.name}>{name}</h3>
        <p className={classNames.price}>{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>
        {renderActiveAttrs(activeAttrs)}
      </div>

      {/* IMAGE AND QUANTITY COUNTER */}
      <div className={classNames.cartItemInnerRight}>

        {/* ITEM QUANTITY COUNTER */}
        <div className={classNames.counterContainer}>
          <div
            onClick={() => { dispatch(addToCart(props)) }}
            type="button"
            className={classNames.counterButton}>+</div>
          <div className={classNames.counterNumber}>{countCartItemsQuantity(itemsInCart, shopId)}</div>
          <div onClick={() => { dispatch(removeFromCart(shopId)) }}
            type="button"
            className={classNames.counterButton}>-</div>
        </div>

        {/* ITEM IMAGE */}
        <img src={gallery[0]} alt={name} className={classNames.image} />
      </div>

    </div>
  );
}

export default CartItem;