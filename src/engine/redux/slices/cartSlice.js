import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [],
  quantity: 0,
  isConfirmationOrderModalOpen: false,
  orderStatus: "idle"
}

const countTotalQuantity = (arr) => {
  let res = 0;
  arr.forEach(item => {
    res = res + item.quantity;
  });
  return res;
}

const cartSlice = createSlice(
  {
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
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
      removeFromCart: (state, action) => {

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
      restoreCartFromLocalStorage: (state, action) => {
        state.itemsInCart = action.payload.itemsInCart;
        state.quantity = action.payload.quantity;
      },
      setIsConfirmationOrderModalOpen: (state, action) => {
        state.isConfirmationOrderModalOpen = action.payload;
      },
      setOrderStatus: (state, action) => {
        state.orderStatus = action.payload;
      }
    }
  }
);

const { actions, reducer } = cartSlice;
export default reducer;
export const {
  addToCart,
  removeFromCart,
  restoreCartFromLocalStorage,
  setIsConfirmationOrderModalOpen,
  setOrderStatus
} = actions;