// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     id: '',
//     name: '',
//     attributes: {},
//     price: 0
// };


// const chosenProductSlice = createSlice({
//     name: 'chosenProduct',
//     initialState,
//     reducers: {
//         getId: (state, action) => {
//             state.id = action.payload;
//         },
//         getName: (state, action) => {
//             state.name = action.payload;
//         },
//         getPrice: (state, action) => {
//             state.price = action.payload;
//         },
//         getAttribute: (state, action) => {
//             state.attributes = { ...state.attributes, ...action.payload };
//         }
//     }
// });

// const { actions, reducer } = chosenProductSlice;

// export const { getId, getName, getPrice, getAttribute } = actions;
// export default reducer;