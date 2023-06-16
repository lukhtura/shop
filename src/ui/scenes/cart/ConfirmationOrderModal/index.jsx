//Core
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useSendOrder from "engine/hooks/useSendOrder";
import useProcessOrder from "engine/hooks/useProcessOrder";

//Actions
import { setIsConfirmationOrderModalOpen } from "engine/redux/slices/cartSlice";

//Components
import SubmitButton from "ui/components/SubmitButton";
import DeclineButton from "ui/components/DeclineButton";
import Spinner from "ui/components/Spinner";

//Style
import { useStyles } from "./styles";



function ConfirmationOrderModal() {

  const dispatch = useDispatch();
  const isConfirmationOrderModalOpen = useSelector(state => state.cart.isConfirmationOrderModalOpen);

  const [submitOrder, data, loading, error] = useSendOrder();
  const processOrder = useProcessOrder();

  const classNames = useStyles();

  /* CLOSE MODAL ON ESC BUTTON */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        dispatch(setIsConfirmationOrderModalOpen(false));
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch]);


  useEffect(() => {
    processOrder(data, loading, error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);



  if (!isConfirmationOrderModalOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={() => dispatch(setIsConfirmationOrderModalOpen(!isConfirmationOrderModalOpen))}
      className={classNames.modalOverflow} >

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
                  onClick={() => dispatch(setIsConfirmationOrderModalOpen(false))}
                  className={classNames.btn}
                >
                  NO
                </DeclineButton>
                <SubmitButton
                  onClick={() => submitOrder("someBuyerID")}
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
    document.getElementById("modal")
  );
}

export default ConfirmationOrderModal;