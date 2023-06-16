//Components
import CartItem from "ui/scenes/cart/CartItem";

function CartList({ data, context }) {

  if (data.length > 0) return (
    <>
      {data.map((item) => {
        return <CartItem
          context={context}
          key={item.id}
          shopId={item.shopId}
          name={item.name}
          brand={item.brand}
          prices={item.prices}
          gallery={item.gallery}
          attributes={item.attributes}
          activeAttrs={item.activeAttrs}
        />
      })}
    </>
  );
}


export default CartList;