import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartSlice from "./Slice/ShoppingCartSlice";

export const Store = configureStore({
  reducer: {
    shoppingCart: ShoppingCartSlice,
  },
});
