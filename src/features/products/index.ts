/**
 * IMPORTS
 */
import * as asyncActions from "./actions";
import products from "./slice";

/**
 * I merge slice actions with async actions.
 */
const actions: any = {
  ...asyncActions,
  ...products.actions,
};

/**
 * EXPORTS
 */
export { actions, products };
