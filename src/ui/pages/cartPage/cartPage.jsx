//Core
import { useSelector } from 'react-redux';
//Actions
import { countTotalPrice } from 'src/utils/totalPriceCounter';
//Components
import CartList from 'src/ui/components/cartList/cartList';
//Styles
import 'src/ui/pages/cartPage/cartPage.scss'

const CartPage = () => {

    const { qty, itemsInCart } = useSelector(state => state.cart);
    const currencySelected = useSelector(state => state.header.currencySelected);

    const countTaxes = (taxesProcent, price) => {
        let res = price / 100 * taxesProcent;
        return res.toFixed(2);
    };

    return (
        <>
            <h1 className='cart-page-header'>CART</h1>
            <CartList data={itemsInCart} />
            <div className='cart-total-module'>
                <div className='cart-total-module-text'>
                    <p className='cart-total-module-text-constant'>Tax 21%: <span className='cart-total-module-text-dynamic'>${countTaxes(21, countTotalPrice(itemsInCart, currencySelected))}</span></p>
                    <p className='cart-total-module-text-constant'>Quantity: <span className='cart-total-module-text-dynamic'>{qty}</span></p>
                    <p className='cart-total-module-text-constant'>Total: <span className='cart-total-module-text-dynamic'>${countTotalPrice(itemsInCart, currencySelected)}</span></p>
                </div>
                <button className='cart-total-module-button'>ORDER</button>
            </div>
        </>
    );

};

export default CartPage;