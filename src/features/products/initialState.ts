/**
 * IMPORTS
 */
import { IProductsState } from "./index.d";

/**
 * I am the products initial state.
 */
const initialState: IProductsState = {
  id: "",
  products: {
    id: "",
    name: "",
    value: "",
  },
};

/**
 * EXPORTS
 */
export { initialState };
