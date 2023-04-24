//Core
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//Actions
import { toggleCartModal } from "src/redux/features/headerSlice";
//Components
import CartList from "src/ui/components/cartList/cartList";
//Utils
import { countTotalPrice } from "src/utils/totalPriceCounter";
//Style
import { useStyles } from "./styles";

function CartModal() {

    /* STYLES */
    const classes = useStyles();
    /* STYLES */

    /* STATE */
    const dispatch = useDispatch();
    const currencySelected = useSelector(state => state.header.currencySelected);
    const cartModalOpened = useSelector(state => state.header.cartModalOpened);
    const { quantity, itemsInCart } = useSelector(state => state.cart);
    /* STATE */

    return (
        <div
            onClick={() => dispatch(toggleCartModal(!cartModalOpened))}
            className={cartModalOpened
                ? classes.modalOverflow
                : `${classes.modalOverflow} ${classes.displayNone}`} >

            <div onClick={e => e.stopPropagation()} className={classes.modal}>

                <div>
                    <h3 className={classes.header}>My Bag<span className={classes.itemsQuantity}>, {quantity} items</span></h3>
                    <div className={classes.cartListContainer}>
                        <CartList data={itemsInCart} />
                    </div>

                    <div className={classes.totalPriceContainer}>
                        <p className={classes.totalPriceText}>Total</p>
                        <p className={classes.totalPriceText}>{currencySelected.symbol}{countTotalPrice(itemsInCart, currencySelected)}</p>
                    </div>

                    <div className={classes.buttonContainer}>

                        <Link
                            to={"/cart"}
                            onClick={() => { dispatch(toggleCartModal(!cartModalOpened)) }}>
                            <button className={`${classes.button} ${classes.viewBtn}`}>VIEW BAG</button>
                        </Link>

                        <button className={`${classes.button} ${classes.checkoutBtn}`}>CHECK OUT</button>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default CartModal;