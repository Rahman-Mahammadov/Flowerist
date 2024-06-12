import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const cartClickSlicer = createSlice({
  name: "catClick",
  initialState,
  reducers: {
   
    cartClicked: (state) => {
      state.value = !state.value;
    },
  },
});

export const { cartClicked } = cartClickSlicer.actions;

export default cartClickSlicer.reducer;
