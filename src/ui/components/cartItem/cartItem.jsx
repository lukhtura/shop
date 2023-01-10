//Core
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { addToCart, removeFromCart } from '../../../redux/features/cartSlice';
//Utils
import { currencyExchanger } from '../../../utils/currencyExchanger';
//Styles
import './cartItem.scss';
import galleryButton from '../../../assets/img/galleryArrow.svg';

const CartItem = (props) => {

    const dispatch = useDispatch();
    const { itemsInCart } = useSelector(state => state.cart);
    const { currencySelected } = useSelector(state => state.header);

    const countQuantity = (data, id) => {
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
            }

            return (
                <div key={i}>
                    <p className='cart-item-attribute-name'>{item.name.toUpperCase()}:</p>
                    <p className='cart-item-attribute-value'>{item.value}</p>
                </div>
            )
        });
    };

    const renderGallerySlider = (data) => {
        return data.map((item, i) => <img key={item} className="gallery-item" src={gallery[i]} alt='alt' />)
    }


    return (
        <div className="cart-item">
            <div className="cart-item-inner-left">
                <h2 className="cart-item-brand">{brand}</h2>
                <h3 className="cart-item-name">{name}</h3>
                <p className="cart-item-price">{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>
                {renderActiveAttrs(activeAttrs)}
            </div>
            <div className="cart-item-inner-right">
                <div className="qty-container">
                    <div
                        onClick={() => {
                            dispatch(addToCart(props));
                        }}
                        type='button'
                        className="change-qty-btn">+</div>
                    <div className="cart-item-qty">{countQuantity(itemsInCart, shopId)}</div>
                    <div onClick={() => {
                        dispatch(removeFromCart(shopId));
                    }}
                        type='button'
                        className="change-qty-btn">-</div>
                </div>
                <div className="img-container">
                    <div className="img-container-flow">
                        {renderGallerySlider(gallery)}
                    </div>
                    <div>
                        <img
                            className='next-arrow'
                            src={galleryButton}
                            alt="next" />
                        <img
                            className='prev-arrow'
                            src={galleryButton}
                            alt="previous" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;