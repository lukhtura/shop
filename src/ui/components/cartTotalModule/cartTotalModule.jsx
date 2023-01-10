//Core
import { useSelector } from 'react-redux';
//Utils
import { countTotalPrice } from '../../../utils/totalPriceCounter';
//Styles
import './cartTotalModule.scss';


const CartTotalModule = (props) => {

    const { qty, itemsInCart } = props;
    const { currencySelected } = useSelector(state => state.header);

    const countTaxes = (taxesProcent, price) => {
        let res = price / 100 * taxesProcent;
        return res.toFixed(2);
    }


    return (
        <div className="cart-total-module">
            <div className="cart-total-module-text">
                <p className="cart-total-module-text-constant">Tax 21%: <span className="cart-total-module-text-dynamic">${countTaxes(21, countTotalPrice(itemsInCart, currencySelected))}</span></p>
                <p className="cart-total-module-text-constant">Quantity: <span className="cart-total-module-text-dynamic">{qty}</span></p>
                <p className="cart-total-module-text-constant">Total: <span className="cart-total-module-text-dynamic">${countTotalPrice(itemsInCart, currencySelected)}</span></p>
            </div>
            <button className="cart-total-module-button">ORDER</button>
        </div>
    );
}


export default CartTotalModule;