//Core
import { useSelector } from "react-redux";
//Components
import CartItem from './../cartItem/cartItem'

const CartList = () => {

    const { items, qty } = useSelector(state => state.cart);


    return (
        <>
            {items.map((item, i) => {
                return <CartItem
                    key={i}
                    name={item.name}
                    gallery={item.gallery} />
            })}
        </>
    )


}


export default CartList;