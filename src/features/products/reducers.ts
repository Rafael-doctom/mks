/**
 * IMPORTS
 */
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { initialState } from "./initialState";

/**
 * I am a products reducer.
 */
const productsAll = (state: any, action: any) => {
  // set state
  state.accountId = action.payload.data.user.id;
  state.user = action.payload.data.user;
  state.refresh_token = action.payload.data.refresh_token;
};

/**
 * I build a extra reducer to products.
 */
const buildProductsAll = (builder: ActionReducerMapBuilder<unknown>): void => {
  builder.addCase(actions.productsAll.fulfilled, productsAll);
};

/**
 * I am a clean reducer.
 */
const CleanStateProduct = () => initialState;

/**
 * EXPORTS
 */
export { CleanStateProduct, buildProductsAll };
