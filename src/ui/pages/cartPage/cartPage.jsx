//Core
import { useSelector } from "react-redux";
//Components
import CartList from "../../components/cartList/cartList";
import CartTotalModule from "../../components/cartTotalModule/cartTotalModule";
//Styles
import './cartPage.scss';


const CartPage = () => {

    const { qty, itemsInCart, totalPrice } = useSelector(state => state.cart);

    return (
        <>
            <h1 className="cart-page-header">CART</h1>
            <CartList data={itemsInCart} />
            <CartTotalModule
                qty={qty}
                totalPrice={totalPrice}
                itemsInCart={itemsInCart} />
        </>
    );

};


export default CartPage;