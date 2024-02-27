import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart(state, action) {
      const isExists = state.cart.find(
        (product) => product?.id === action.payload.id
      );

      if (!isExists) {
        state.cart.push(action.payload);
      } else {
        state.cart.forEach((product) => {
          if (product.id === action.payload.id) {
            product.quantity += 1;
          }
        });
      }

      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },

    removeFromCart(state, action) {
      const { cart } = current(state);

      const existingProduct = cart?.find(
        (product) => product.id === action.payload
      );

      if (existingProduct?.quantity === 1) {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      } else if (existingProduct?.quantity !== 1) {
        state.cart = state.cart.map((product) => {
          if (product.id === action.payload) {
            product.quantity -= 1;
            return product;
          } else {
            return product;
          }
        });
      }

      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },

    removeAll(state, action) {
      const { cart } = current(state);

      const existingProduct = cart?.find(
        (product) => product.id === action.payload
      );

      state.cart = cart.filter((product) => product.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },
  },

});

export const { addToCart, removeFromCart, removeAll, setCartList } =
  cartSlice.actions;

export default cartSlice.reducer;
