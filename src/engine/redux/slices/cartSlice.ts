import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

//Types
import { OrderStatus, ProductInCart } from "engine/types/products";

//Utils
import { countTotalQuantity } from "utils/countTotalQuality";

export interface CartState {
  itemsInCart: ProductInCart[];
  quantity: number;
  isConfirmationOrderModalOpen: boolean;
  orderStatus: OrderStatus;
}

const initialState: CartState = {
  itemsInCart: [],
  quantity: 0,
  isConfirmationOrderModalOpen: false,
  orderStatus: OrderStatus.Idle
}

const cartSlice = createSlice(
  {
    name: "cart",
    initialState,
    reducers: {
      addToCart: (
        state,
        action: PayloadAction<ProductInCart>
      ) => {

        const res = state.itemsInCart.reduce((acc, item) => {
          if (item.shopId === action.payload.shopId) {
            acc += 1;
          }
          return acc;
        }, 0);

        if (res > 0) {
          state.itemsInCart.forEach(item => {
            if (item.shopId === action.payload.shopId) {
              item.quantity += 1;
            }
          });
        } else {
          state.itemsInCart.push({ ...action.payload });
        }

        state.quantity = countTotalQuantity(state.itemsInCart);

        window.localStorage.setItem("CART_ITEMS", JSON.stringify(state));
      },
      removeFromCart: (
        state,
        action: PayloadAction<string>
      ) => {

        if (action.payload === "all") {
          state.itemsInCart = [];
          state.quantity = 0;
          window.localStorage.setItem("CART_ITEMS", JSON.stringify(state));
        }

        state.itemsInCart.forEach((item, i) => {
          if (item.shopId === action.payload) {
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              state.itemsInCart.splice(i, 1);
            }
          }
        });

        state.quantity = countTotalQuantity(state.itemsInCart);

        window.localStorage.setItem("CART_ITEMS", JSON.stringify(state));

      },
      //TODO: add PayloadAction here!
      restoreCartFromLocalStorage: (state, action) => {
        state.itemsInCart = action.payload.itemsInCart;
        state.quantity = action.payload.quantity;
      },
      setIsConfirmationOrderModalOpen: (
        state,
        action: PayloadAction<boolean>
      ) => {
        state.isConfirmationOrderModalOpen = action.payload;
      },
      setOrderStatus: (
        state,
        action: PayloadAction<OrderStatus>
      ) => {
        state.orderStatus = action.payload;
      }
    }
  }
);

const { actions, reducer } = cartSlice;
export const {
  addToCart,
  removeFromCart,
  restoreCartFromLocalStorage,
  setIsConfirmationOrderModalOpen,
  setOrderStatus
} = actions;
export default reducer;