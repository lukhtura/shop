//Components
import CartItem from './../cartItem/cartItem'

const CartList = (props) => {

    const { data } = props;

    const filterItems = (arr) => {
        const filteredArr = [...new Map(arr.map(item => [item['shopId'], item])).values()];
        return filteredArr;
    };

    const renderItems = (data) => {
        return (
            data.length < 1
                ? <h2>Your cart is empty</h2>
                : filterItems(data).map((item, i) => {
                    return <CartItem
                        key={item.id}
                        techId={item.id}
                        shopId={item.shopId}
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