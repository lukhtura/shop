//Utils
import { v4 } from 'uuid'
//Components
import CartItem from './../cartItem/cartItem'

const CartList = (props) => {

    const { data } = props;

    const filterItems = (arr) => {
        const filteredArr = [...new Map(arr.map(item => [item['id'], item])).values()];
        return filteredArr;
    };

    const renderItems = (data) => {
        return (
            data.length < 1
                ? <h2>Your cart is empty</h2>
                : filterItems(data).map((item, i) => {
                    return <CartItem
                        key={v4()}
                        id={item.id}
                        name={item.name}
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