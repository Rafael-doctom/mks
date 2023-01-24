/**
 * IMPORTS
 */
import { combineReducers } from "redux";
import { products } from "../features/products";

import { persistConfig, persistReducer } from "./persit";

/**
 * I create a root reducer.
 */
const reducer = combineReducers({
  [products.name]: products.reducer,
}) as any;

/**
 * I create a persisted root reducer.
 */
const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * EXPORTS
 */
export { persistedReducer, reducer };
