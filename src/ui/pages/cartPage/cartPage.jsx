//Core
import { useSelector } from "react-redux";
//Components
import CartItem from "../../components/cartItem/cartItem";
import CartTotalModule from "../../components/cartTotalModule/cartTotalModule";
//Styles
import './cartPage.scss';


const CartPage = () => {

    const {items, qty} = useSelector(state => state.cart);

    return (
        <>
        <h1 className="cart-page-header">CART</h1>
            <CartItem />
            <CartTotalModule qty={qty}/>
        </>
    )

}


export default CartPage;