//Components
import CartItem from "src/ui/components/CartItem";

function CartList({ data }) {

  if (data.length > 0) return (
    <>
      {data.map((item) => {
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
      })}
    </>
  );
}


export default CartList;