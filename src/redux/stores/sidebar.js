import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    openCart(state) {
      state.isCartOpen = true;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
  },
});

export const { toggleCart, openCart, closeCart } = sidebarSlice.actions;
export default sidebarSlice.reducer;
