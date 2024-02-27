import { createSlice } from "@reduxjs/toolkit";
import products from "../../Data/dummydata";

export const counterSlice = createSlice({
  name: "product",
  initialState: {
    filteredProducts: [],
    value: 0,
  },
  reducers: {
    TakeProduct: (state, action) => {
      const selectedProduct = products.filter(
        (product) => product.category === action.payload
      );
      state.filteredProducts = selectedProduct;
      console.log(selectedProduct);
    },

    sendProductPage: (state, action) => {
      console.log(state, action.payload);
    },
    sendBlogPage: (state, action) => {
     console.log(state, action.payload);  
    },
  },
});

export const { TakeProduct, sendProductPage,sendBlogPage } = counterSlice.actions;
export default counterSlice.reducer;
