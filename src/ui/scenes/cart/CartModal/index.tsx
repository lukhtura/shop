// Core
import { useAppSelector } from "engine/redux/hooks";

// Components
import CartModalButton from "ui/scenes/cart/CartModal/CartModalButton";
import CartModalContent from "ui/scenes/cart/CartModal/CartModalContent";


const CartModal = () => {

  const isCartModalOpen = useAppSelector(state => state.header.isCartModalOpen);

  function mountCartModalContent(): JSX.Element | null {
    if (isCartModalOpen) return <CartModalContent />

    return null;
  }

  return (
    <>
      <CartModalButton />
      {mountCartModalContent()}
    </>
  );
}

export default CartModal;