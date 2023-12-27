import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const ShoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {
    handleShoppingIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default ShoppingCartSlice.reducer;
export const { handleShoppingIsOpen } = ShoppingCartSlice.actions;
