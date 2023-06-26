// Components
import CartItem from "ui/scenes/cart/CartItem";

// Types
import { ProductInCart } from "engine/types/products";

interface CartListProps {
  data: ProductInCart[];
}

const CartList: React.FC<CartListProps> = ({ data }) => {
  if (data.length > 0) {
    return (
      <>
        {data.map((item: ProductInCart) => (
          <CartItem
            key={item.id}
            id={item.id}
            shopId={item.shopId}
            name={item.name}
            brand={item.brand}
            prices={item.prices}
            gallery={item.gallery}
            attributes={item.attributes}
            activeAttrs={item.activeAttrs}
            quantity={item.quantity}
          />
        ))}
      </>
    );
  } else {
    return <p>Cart is empty</p>;
  }
}

export default CartList;