import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  activeCategory: "all",
}


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetch: (state, action) => {
      state.products = action.payload;
    },
    categoriesFetch: (state, action) => {
      state.categories = action.payload;
    },
    activeCategoryChange: (state, action) => {
      state.activeCategory = action.payload;
    }
  }
});

const { actions, reducer } = productsSlice;

export const {
  productsFetch,
  categoriesFetch,
  activeCategoryChange
} = actions;

export default reducer;