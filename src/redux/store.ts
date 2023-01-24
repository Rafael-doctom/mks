import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const createStore = (): EnhancedStore => reducer;

export default configureStore({
  reducer: {
    reducer,
  },
});
