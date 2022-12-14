//Styles
import './cartTotalModule.scss'


const CartTotalModule = (props) => {


    return (
        <div className="cart-total-module">
            <div className="cart-total-module-text">
                <p className="cart-total-module-text-constant">Tax 21%: <span className="cart-total-module-text-dynamic">$42.00</span></p>
                <p className="cart-total-module-text-constant">Quantity: <span className="cart-total-module-text-dynamic">{props.qty}</span></p>
                <p className="cart-total-module-text-constant">Total: <span className="cart-total-module-text-dynamic">$200.00</span></p>
            </div>
            <button className="cart-total-module-button">ORDER</button>
        </div>
    );
};


export default CartTotalModule;