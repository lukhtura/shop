//Components
import CartItem from 'src/ui/components/cartItem/cartItem';

const CartList = ({ data }) => {

    const renderItems = (data) => {
        return (
            data.length < 1
                ? <h2>Your cart is empty</h2>
                : data.map((item, i) => {
                    return <CartItem
                        key={item.id}
                        shopId={item.shopId}
                        name={item.name}
                        brand={item.brand}
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
    );
};


export default CartList;