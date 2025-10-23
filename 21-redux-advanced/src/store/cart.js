import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui';

// Items will have this form { title: 'Test Item', quantity: 3, total: 18, price: 6 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.changed = true;
      if (!existingItem) {
        console.log('ERROR');
      }

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-redux-4816f-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      );

      if (!response.ok) {
        throw new Error('Coult not fetch cart data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetch cart data failed!',
        }),
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-redux-4816f-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartData),
        },
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Send cart data successfully!',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Send cart data failed!',
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
