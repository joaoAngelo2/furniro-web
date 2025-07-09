import { createSlice } from '@reduxjs/toolkit';

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState: { isOpen: false },
  reducers: {
    setCartOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setCartOpen } = cartModalSlice.actions;
export default cartModalSlice.reducer;