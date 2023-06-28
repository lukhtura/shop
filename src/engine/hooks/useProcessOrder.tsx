//Core
import { useAppDispatch, useAppSelector } from 'engine/redux/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

//Types
import { OrderStatus } from 'engine/types/products';

//Actions
import { setIsConfirmationOrderModalOpen, removeFromCart, setOrderStatus } from "engine/redux/slices/cartSlice";
import { setIsCartModalOpen } from "engine/redux/slices/headerSlice";
import { NewOrderDetails } from 'engine/hooks/useSendOrder';
import { ApolloError } from '@apollo/client';


interface DataResponse {
  createOrderWithBuyer: NewOrderDetails;
}

interface ProccesOrderArgs {
  data: DataResponse | null | undefined,
  loading: boolean,
  error: ApolloError | undefined
}


function useProcessOrder() {

  const dispatch = useAppDispatch();
  const isCartModalOpen = useAppSelector(state => state.header.isCartModalOpen);

  const location = useLocation();
  const currentPage = location.pathname;
  const navigate = useNavigate();

  function processOrder({ data, loading, error }: ProccesOrderArgs): void {

    if (error) {
      console.log(error)
      if (isCartModalOpen) {
        dispatch(setIsCartModalOpen(false));
      }

      dispatch(setIsConfirmationOrderModalOpen(false));
      dispatch(setOrderStatus(OrderStatus.Error));

      const timerID = setTimeout(() => {
        dispatch(setOrderStatus(OrderStatus.Idle));
        clearTimeout(timerID);
      }, 3000)
    }

    if (loading) {
      const limit = 15000;

      const limitTimer = setTimeout(() => {
        dispatch(setOrderStatus(OrderStatus.Idle));
        clearTimeout(limitTimer);
      }, limit)

      console.log("loading");
    }

    if (data) {
      console.log("Order completed. Your order is:", data);

      if (isCartModalOpen) {
        dispatch(setIsCartModalOpen(false));
      }

      if (currentPage === "/cart") {
        navigate("/");
      }

      dispatch(removeFromCart("all"));
      dispatch(setIsConfirmationOrderModalOpen(false));
      dispatch(setOrderStatus(OrderStatus.Succes));

      const timerID = setTimeout(() => {
        dispatch(setOrderStatus(OrderStatus.Idle));
        clearTimeout(timerID);
      }, 3000)
    }
  }

  return processOrder;
}

export default useProcessOrder;