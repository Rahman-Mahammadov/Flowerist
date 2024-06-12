import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./collectionSLicer";
import basketReducer from "./basketSlicer";
import cartClickReducer from "./cartClickSlicer";

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
    basket: basketReducer,
    cartClick: cartClickReducer,
  },
});
