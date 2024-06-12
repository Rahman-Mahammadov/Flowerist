import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const collectionSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
    collectionIsClicked: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { collectionIsClicked } = collectionSlicer.actions;

export default collectionSlicer.reducer;
