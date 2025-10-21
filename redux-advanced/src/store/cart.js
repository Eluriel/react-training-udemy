import { createSlice } from '@reduxjs/toolkit';

// Products will have this form { title: 'Test Item', quantity: 3, total: 18, price: 6 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: [] },
  reducers: {
    addToCart: (state, { payload }) => {
      const productIndex = state.products.findIndex(
        (product) => product.title === payload.title,
      );

      if (productIndex !== -1) {
        state.products[productIndex].quantity =
          state.products[productIndex].quantity + 1;
        state.products[productIndex].total =
          state.products[productIndex].total +
          state.products[productIndex].price;
      } else {
        state.products.push({ ...payload, quantity: 1, total: payload.price });
      }
    },
    removeFromCart: (state, { payload }) => {
      const productIndex = state.products.findIndex(
        (product) => product.title === payload.title,
      );

      if (productIndex === -1) {
        // This should never happens, but we never know...
        return;
      }
      if (state.products[productIndex].quantity === 1) {
        state.products.splice(productIndex, 1);
      } else {
        state.products[productIndex].quantity =
          state.products[productIndex].quantity - 1;
        state.products[productIndex].total =
          state.products[productIndex].total -
          state.products[productIndex].price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
