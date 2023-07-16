// Core
import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";
import { useEffect } from "react";
import useSendOrder from "engine/hooks/useSendOrder";
import useProcessOrder from "engine/hooks/useProcessOrder";

// Actions
import { setIsConfirmationOrderModalOpen } from "engine/redux/slices/cartSlice";

// Components
import SubmitButton from "ui/components/SubmitButton";
import DeclineButton from "ui/components/DeclineButton";
import Spinner from "ui/components/Spinner";

// Style
import useConfirmationOrderModalStyles from "ui/scenes/cart/ConfirmationOrderModal/styles";

const ConfirmationOrderModal = () => {

  const dispatch = useAppDispatch();
  const isConfirmationOrderModalOpen = useAppSelector(state => state.cart.isConfirmationOrderModalOpen);

  const { submitOrder, data, loading, error } = useSendOrder();
  const processOrder = useProcessOrder();

  const classNames = useConfirmationOrderModalStyles();

  function closeModal(): void {
    dispatch(setIsConfirmationOrderModalOpen(false));
  }

  function handleEscapeKeyListener(e: KeyboardEvent): void {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  /* CLOSE MODAL ON ESC BUTTON */
  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyListener);
    return () => {
      window.removeEventListener("keydown", handleEscapeKeyListener);
    };
  }, []);


  useEffect(() => {
    processOrder({ data, loading, error });
  }, [data, loading, error]);

  if (!isConfirmationOrderModalOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
      className={classNames.modalOverflow}
    >

      {/* CONTENT */}
      <div onClick={e => e.stopPropagation()} className={classNames.modalContent}>
        <div>
          <p className={classNames.message}>Confirm order?</p>
        </div>
        <div className={classNames.btnsContainer}>
          {
            loading
              ? <Spinner width="50px" />
              : <>
                <DeclineButton
                  onClick={closeModal}
                  className={classNames.btn}
                >
                  NO
                </DeclineButton>
                <SubmitButton
                  onClick={() => submitOrder("BuyerID")}
                  disabled={loading}
                  className={classNames.btn}
                >
                  YES
                </SubmitButton>
              </>
          }
        </div>
      </div>
    </div >,
    document.getElementById("modal") as HTMLElement
  );
}

export default ConfirmationOrderModal;