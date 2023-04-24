//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { addToCart, removeFromCart } from "src/redux/features/cartSlice";

//Utils
import { currencyExchanger } from "src/utils/currencyExchanger";

//Styles
// import "src/ui/components/cartItem/cartItem.scss";
import galleryButton from "src/assets/img/galleryArrow.svg";
import { useStyles } from "./styles";

const CartItem = (props) => {

    /* STATE */
    const dispatch = useDispatch();
    const itemsInCart = useSelector(state => state.cart.itemsInCart);
    const currencySelected = useSelector(state => state.header.currencySelected);
    /* STATE */

    const classes = useStyles();


    const countCartItemsQuantity = (data, id) => {
        let res = 0;
        data.forEach(item => {
            if (item.shopId === id) {
                res = item.quantity;
            };
        });

        return res;
    };

    const { shopId, name, brand, prices, gallery, activeAttrs } = props;

    const selectedCurrencyPrice = currencyExchanger(prices, currencySelected);

    const renderActiveAttrs = (attrs) => {

        return attrs.map((item, i) => {
            if (item.name === "Color") {
                return (
                    <div className={classes.attribute} key={i}>
                        <p className={classes.attrName}>
                            {item.name.toUpperCase()}:<br />
                            <div
                                style={{ backgroundColor: item.value, display: "inline-block" }}
                                className={classes.attrColor} key={i}>
                            </div>
                        </p>
                    </div>
                );
            };

            return (
                <div key={i}>
                    <p className={classes.attrName}>{item.name.toUpperCase()}:</p>
                    <p className={classes.attrValue}>{item.value}</p>
                </div>
            );
        });
    };

    const renderGallerySlider = (data) => {
        return data.map((item, i) => <img key={item} className={classes.galleryItem} src={gallery[i]} alt="alt" />);
    };


    return (

        <div className={classes.cartItem}>

            {/* ITEM INFO */}
            <div>
                <h2 className={classes.brand}>{brand}</h2>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.price}>{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>
                {renderActiveAttrs(activeAttrs)}

            </div>

            {/* GALLERY AND QUANTITY COUNTER */}

            <div className={classes.cartItemInnerRight}>


                {/* ITEM QUANTITY COUNTER */}
                <div className={classes.counterContainer}>
                    <div
                        onClick={() => {
                            dispatch(addToCart(props));
                        }}
                        type="button"
                        className={classes.counterButton}>+</div>
                    <div className={classes.counterNumber}>{countCartItemsQuantity(itemsInCart, shopId)}</div>
                    <div onClick={() => {
                        dispatch(removeFromCart(shopId));
                    }}
                        type="button"
                        className={classes.counterButton}>-</div>
                </div>

                {/* ITEM GALLERY */}

                <div className={classes.gallery}>
                    <div className={classes.galleryFlow}>
                        {renderGallerySlider(gallery)}
                    </div>
                    <div>
                        <img
                            className={classes.nextBtn}
                            src={galleryButton}
                            alt="next" />
                        <img
                            className={classes.prevBtn}
                            src={galleryButton}
                            alt="previous" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartItem;