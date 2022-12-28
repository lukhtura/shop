//Core
import { Link } from "react-router-dom"
//Actions
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartModal } from "./../header/headerSlice";
//Components
import CartList from "../cartList/cartList";
//Style
import './cartModal.scss'
import { CSSTransition } from 'react-transition-group';

function CartModal() {

    const dispatch = useDispatch();
    const cartModalOpened = useSelector(state => state.header.cartModalOpened);
    const { qty, itemsInCart, totalPrice } = useSelector(state => state.cart);

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
                        <h3 className='cart-modal-content-header'>My Bag<span className='items-qty'>, {qty} items</span></h3>
                        <div className="cart-modal-content-inner">
                            <CartList data={itemsInCart} />
                        </div>
                        <div className='total-price'>
                            <p className='total-price-left'>Total</p>
                            <p className='total-price-right'>${totalPrice}</p>
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