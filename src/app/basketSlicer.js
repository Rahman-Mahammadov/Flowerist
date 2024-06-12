import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const basketSlicer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    totalCartAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { totalCartAmount } = basketSlicer.actions;

export default basketSlicer.reducer;
