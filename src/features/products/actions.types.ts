/**
 * IMPORTS
 */
import { IProductsState, NAME } from "./index.d";

/**
 * Confirm code request interface.
 */
export interface IConfirmCodeRequest {
  code: number;
  email: string;
}

/**
 * response interface of products.
 */
export type IProductsResponse = IProductsState;

/**
 * Products action types.
 */
export const types = {
  GET_ALL_PRODUCTS: `${NAME}/products`,
};
