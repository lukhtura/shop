//Core
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

//Actions
import { setIsConfirmationOrderModalOpen, removeFromCart, setOrderStatus } from "engine/redux/slices/cartSlice";
import { setIsCartModalOpen } from "engine/redux/slices/headerSlice";



function useProcessOrder() {

  const dispatch = useDispatch();
  const isCartModalOpen = useSelector(state => state.header.isCartModalOpen);

  const location = useLocation();
  const currentPage = location.pathname;
  const navigate = useNavigate();


  function processOrder(data, loading, error) {
    if (error) {
      console.log("error")
      if (isCartModalOpen) {
        dispatch(setIsCartModalOpen(false));
      }

      dispatch(setIsConfirmationOrderModalOpen(false));
      dispatch(setOrderStatus("error"));

      const timerID = setTimeout(() => {
        dispatch(setOrderStatus("idle"));
        clearTimeout(timerID);
      }, 3000)

    } else if (loading) {
      const limit = 15000;

      const limitTimer = setTimeout(() => {
        dispatch(setOrderStatus("idle"));
        clearTimeout(limitTimer);
      }, limit)

      console.log("loading");

    } else if (data) {
      console.log("Order completed. Your order is:", data.createOrderWithBuyer);

      if (isCartModalOpen) {
        dispatch(setIsCartModalOpen(false));
      }

      if (currentPage === "/cart") {
        navigate("/");
      }

      dispatch(removeFromCart("all"));
      dispatch(setIsConfirmationOrderModalOpen(false));
      dispatch(setOrderStatus("succes"));

      const timerID = setTimeout(() => {
        dispatch(setOrderStatus("idle"));
        clearTimeout(timerID);
      }, 3000)

    }
  }

  return processOrder;
}

export default useProcessOrder;