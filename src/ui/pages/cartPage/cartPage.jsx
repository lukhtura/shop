//Core
import { useSelector } from "react-redux";
//Components
import CartList from "../../components/cartList/cartList";
import CartTotalModule from "../../components/cartTotalModule/cartTotalModule";
//Styles
import './cartPage.scss';


const CartPage = () => {

    const { qty, itemsInCart } = useSelector(state => state.cart);

    const renderCartModule = () => {
        if (qty > 0) {
            return <CartTotalModule qty={qty} />
        }
    };

    return (
        <>
            <h1 className="cart-page-header">CART</h1>
            <CartList data={itemsInCart} />
            {renderCartModule()}
        </>
    );

};


export default CartPage;