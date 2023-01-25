/**
 * Products types.
 */

export interface Products {
  id: string;
  name: string;
  value: string;
}

/**
 * User state interface.
 */
export interface IProductsState extends IRequestTrack {
  [x: string]: any;
  id?: boolean | nul;
  products: Products;
}

/**
 * User slice name.
 */
export const NAME = "products";
