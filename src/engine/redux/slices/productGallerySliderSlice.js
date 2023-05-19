import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSlide: "",
}

const productGallerySliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    showSlide: (state, action) => {
      state.activeSlide = action.payload;
    },
    clearActiveSlide: state => {
      state.activeSlide = "";
    },
  }
});

const { actions, reducer } = productGallerySliderSlice;
export const { showSlide, clearActiveSlide } = actions;
export default reducer;

