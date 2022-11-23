//Core

//Style
import './cartModal.css'
import { CSSTransition } from 'react-transition-group';

import fakeItem from './../../../assets/img/modal/fakeitem.jpg'

function CartModal(props) {

    return (
        <CSSTransition mountOnEnter in={props.show} timeout={1000} classNames="modal">
            <div className='modal'>
                <div className='cart-modal'>
                    <div className="cart-modal-content">
                        <h3 className='modal-header'>My Bag<span className='items-number'>, 3 items</span></h3>
                        <div className="items-container">
                            <div className='item'>
                                <img src={fakeItem} alt="fake-card-item" />
                            </div>
                            <div className='item'>
                                <img src={fakeItem} alt="fake-card-item" />
                            </div>
                        </div>
                        <div className='total-price'>
                            <p className='total-price-left'>Total</p>
                            <p className='total-price-right'>$200.00</p>
                        </div>
                        <div className="modal-btn-container">
                            <button type='button' className="modal-cart-btn modal-cart-btn-view">VIEW BAG</button>
                            <button type='button' className="modal-cart-btn modal-cart-btn-checkout">CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CartModal;