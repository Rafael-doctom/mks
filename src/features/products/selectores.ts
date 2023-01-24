/**
 * IMPORTS
 */
import { products } from "./index";
import { IProductsState } from "./index.d";

/**
 * I select the products slice from state.
 */
const selectSlice = (state: any): IProductsState => state[products.name];

/**
 * EXPORTS
 */
export { selectSlice };
