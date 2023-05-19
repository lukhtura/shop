import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "all",
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    activeCategoryChange: (state, action) => {
      state.activeCategory = action.payload;
    }
  }
});

const { actions, reducer } = categoriesSlice;

export const {
  activeCategoryChange
} = actions;

export default reducer;