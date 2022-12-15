//Styles
import './cartItem.css'

const CartItem = (props) => {

    const { name, prices, attributes, gallery } = props;

    return (
        <div className="cart-item">
            <div className="cart-item-inner-left">
                <h2 className="cart-item-name">{name}</h2>
                <h3 className="cart-item-descr">Running Short</h3>
                <p className="cart-item-price">$50.00</p>
                <p className="cart-item-size-label">size:</p>
                <div className="size-box-container">
                    <button className="size-btn" type="button">XS</button>
                    <button className="size-btn size-btn-active" type="button">S</button>
                    <button className="size-btn" type="button">M</button>
                </div>
                <p className="color-label">color:</p>
                <div className="color-container">
                    <button style={{ backgroundColor: '#D3D2D5' }}
                        type="button"
                        className="color-btn"></button>
                    <button style={{ backgroundColor: '#2B2B2B' }}
                        type="button"
                        className="color-btn color-btn-active"></button>
                    <button style={{ backgroundColor: '#0F6450' }}
                        type="button"
                        className="color-btn"></button>
                </div>
            </div>
            <div className="cart-item-inner-right">
                <div className="qty-container">
                    <button type='button' className="incr-btn">+</button>
                    <div className="qty">1</div>
                    <button type='button' className="decr-btn">-</button>
                </div>
                <div className="img-container">
                    <img src={gallery[0]} alt="fakeimg" />
                </div>
            </div>
        </div>
    );
};

export default CartItem;