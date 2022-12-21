//Core
// import { useSelector } from "react-redux";
//Components
import CartItem from './../cartItem/cartItem'

const CartList = (props) => {

    const { data } = props;

    const renderItems = (data) => {
        return (
            data.length < 1
                ? <h2>Your cart is empty</h2>
                : data.map((item, i) => {
                    console.log(item)
                    return <CartItem key={i}
                        name={item.name}
                        id={item.id}
                        prices={item.prices}
                        gallery={item.gallery}
                        attributes={item.attributes}
                        activeAttrs={item.activeAttrs}
                    />
                })
        );
    };


    return (
        <div>
            {renderItems(data)}
        </div>
    )

};


export default CartList;