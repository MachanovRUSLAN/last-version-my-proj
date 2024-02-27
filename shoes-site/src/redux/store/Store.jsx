import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slice/proslice";
import cartReducer from "../Slice/cart-slice";

export const store = configureStore({
  reducer: {
    products: counterSlice,
    cartReducer,
  },
  preloadedState: {
    cartReducer: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : { cart: [] },
  },
});
