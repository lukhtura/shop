//Core
import { Link } from "react-router-dom"
//Actions
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartModal } from "./../header/headerSlice";
//Components
import CartItem from "../cartItem/cartItem";
//Style
import './cartModal.scss'
import { CSSTransition } from 'react-transition-group';

import fakeItem from './../../../assets/img/modal/fakeitem.jpg'

function CartModal() {

    const dispatch = useDispatch();
    const cartModalOpened = useSelector(state => state.header.cartModalOpened);
    const { qty, itemsInCart } = useSelector(state => state.cart);

    const renderItems = (data) => {
        return (
            data.length < 1
                ? <h2>Your cart is empty</h2>
                : data.map((item, i) => {
                    console.log(item)
                    return <CartItem key={i}
                        id={item.id}
                        price={item.price}
                    />
                })
        );
    };

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
                            <p>items...</p>
                        </div>
                        <div className='total-price'>
                            <p className='total-price-left'>Total</p>
                            <p className='total-price-right'>$200.00</p>
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