//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { addToCart, removeFromCart } from "engine/redux/slices/cartSlice";

//Utils
import { currencyExchanger } from "utils/currencyExchanger";

//Styles
import { useStyles } from "./styles";



function CartItem(props) {

  /*  */
  const dispatch = useDispatch();
  const itemsInCart = useSelector(state => state.cart.itemsInCart);
  const currencySelected = useSelector(state => state.header.currencySelected);
  /*  */

  /*  */
  const classes = useStyles();
  /*  */

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
          <div className={classes.attribute} key={i}>
            <p className={classes.attrName}>
              {item.name.toUpperCase()}<br />
              <span
                style={{ backgroundColor: item.value, display: "inline-block" }}
                className={classes.attrColor} key={i}>
              </span>
            </p>
          </div>
        );
      }

      return (
        <div key={i}>
          <p className={classes.attrName}>{item.name.toUpperCase()}</p>
          <p className={classes.attrValue}>{item.value}</p>
        </div>
      );
    });
  }

  return (

    <div className={classes.cartItem}>

      {/* ITEM INFO */}
      <div>
        <h2 className={classes.brand}>{brand}</h2>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.price}>{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>
        {renderActiveAttrs(activeAttrs)}
      </div>

      {/* IMAGE AND QUANTITY COUNTER */}
      <div className={classes.cartItemInnerRight}>

        {/* ITEM QUANTITY COUNTER */}
        <div className={classes.counterContainer}>
          <div
            onClick={() => { dispatch(addToCart(props)) }}
            type="button"
            className={classes.counterButton}>+</div>
          <div className={classes.counterNumber}>{countCartItemsQuantity(itemsInCart, shopId)}</div>
          <div onClick={() => { dispatch(removeFromCart(shopId)) }}
            type="button"
            className={classes.counterButton}>-</div>
        </div>

        {/* ITEM IMAGE */}
        <img src={gallery[0]} alt={name} className={classes.image} />
      </div>

    </div>
  );
}

export default CartItem;