import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getproducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { getproducts } = ProductSlice.actions;
