//Core
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { toggleCartModal } from "../../../redux/features/headerSlice";
//Components
import CartList from "../cartList/cartList";
//Utils
import { countTotalPrice } from "../../../utils/totalPriceCounter";
//Style
import './cartModal.scss';
import { CSSTransition } from 'react-transition-group';

function CartModal() {

    const dispatch = useDispatch();
    const currencySelected = useSelector(state => state.header.currencySelected);
    const cartModalOpened = useSelector(state => state.header.cartModalOpened);
    const { quantity, itemsInCart } = useSelector(state => state.cart);

    return (
        <CSSTransition
            mountOnEnter
            in={cartModalOpened}
            timeout={1000}
            classNames="modal">
            <div
                onClick={() => dispatch(toggleCartModal(!cartModalOpened))}
                className='modal'>
                <div onClick={e => e.stopPropagation()} className='cart-modal'>
                    <div className="cart-modal-content">
                        <h3 className='cart-modal-content-header'>My Bag<span className='items-qty'>, {quantity} items</span></h3>
                        <div className="cart-modal-content-inner">
                            <CartList data={itemsInCart} />
                        </div>
                        <div className='total-price'>
                            <p className='total-price-left'>Total</p>
                            <p className='total-price-right'>{currencySelected.symbol}{countTotalPrice(itemsInCart, currencySelected)}</p>
                        </div>
                        <div className="modal-btn-container">
                            <Link
                                to={'/cart'}
                                onClick={() => { dispatch(toggleCartModal(!cartModalOpened)) }}>
                                <button className="modal-btn-container-item view-btn">VIEW BAG</button>
                            </Link>
                            <button type='button' className="modal-btn-container-item checkout-btn">CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CartModal;