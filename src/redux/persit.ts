/**
 * IMPORTS
 */
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { products } from "../features/products";

/**
 * I configure a persisted redux store.
 */
const persistConfig: PersistConfig<unknown> = {
  key: "mks",
  storage,
  whitelist: [products.name],
};

/**
 * EXPORTS
 */
export { persistConfig, persistReducer, persistStore };
