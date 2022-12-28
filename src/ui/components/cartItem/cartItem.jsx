//Core
import { useDispatch, useSelector } from 'react-redux';
//Utils
import { addToCart, removeFromCart, countTotalPrice } from '../../pages/cartPage/cartSlice';
//Styles
import './cartItem.scss'

const CartItem = (props) => {

    const dispatch = useDispatch();
    const { itemsInCart } = useSelector(state => state.cart)

    const countQuantity = (data, id) => {
        let res = 0;
        data.forEach(item => {
            if (item.shopId === id) {
                res = item.quantity
            }
        })
        return res;
    };

    const { shopId, name, brand, prices, gallery, activeAttrs } = props;

    const renderActiveAttrs = (attrs) => {
        return attrs.map((item, i) => {
            if (item.name === 'Color') {
                return (
                    <div className='cart-item-attribute' key={i}>
                        <p className='cart-item-attribute-name'>
                            {item.name.toUpperCase()}:<br />
                            <div
                                style={{ backgroundColor: item.value, display: 'inline-block' }}
                                className='cart-item-attribute-color' key={i}>
                            </div>
                        </p>
                    </div>
                )
            };

            return (
                <div key={i}>
                    <p className='cart-item-attribute-name'>{item.name.toUpperCase()}:</p>
                    <p className='cart-item-attribute-value'>{item.value}</p>
                </div>
            )
        });
    };

    return (
        <div className="cart-item">
            <div className="cart-item-inner-left">
                <h2 className="cart-item-brand">{brand}</h2>
                <h3 className="cart-item-name">{name}</h3>
                <p className="cart-item-price">${prices[0].amount}</p>
                {renderActiveAttrs(activeAttrs)}
            </div>
            <div className="cart-item-inner-right">
                <div className="qty-container">
                    <div
                        onClick={() => {
                            dispatch(addToCart(props));
                            dispatch(countTotalPrice());
                        }}
                        type='button'
                        className="change-qty-btn">+</div>
                    <div className="cart-item-qty">{countQuantity(itemsInCart, shopId)}</div>
                    <div onClick={() => {
                        dispatch(removeFromCart(shopId));
                        dispatch(countTotalPrice());
                    }}
                        type='button'
                        className="change-qty-btn">-</div>
                </div>
                <div className="img-container">
                    <img src={gallery[0]} alt='alt' />
                </div>
            </div>
        </div>
    );
};

export default CartItem;