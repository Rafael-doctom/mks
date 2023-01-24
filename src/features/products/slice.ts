/**
 * IMPORTS
 */
import { createSlice, Slice } from "@reduxjs/toolkit";
import { trackRequest } from "../../redux/utils";
import { productsAll } from "./actions";
import { IProductsState, NAME } from "./index.d";
import { initialState } from "./initialState";
import { buildProductsAll } from "./reducers";

/**
 * I am an products slice.
 */
const slice: Slice<IProductsState> = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // build reducers
    buildProductsAll(builder);

    // track requests
    trackRequest(builder, productsAll);
  },
});

/**
 * EXPORTS
 */
export default slice;
