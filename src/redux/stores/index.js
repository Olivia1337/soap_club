import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../stores/cart";
import sidebarReducer from "../stores/sidebar";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sidebar: sidebarReducer,
  },
});
