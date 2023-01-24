/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProductsResponse, types } from "./actions.types";

/**
 * I log in an user.
 */
const productsAll = createAsyncThunk<IProductsResponse, any>(
  types.GET_ALL_PRODUCTS,

  // request login
  async () => await axios.get("http://localhost:3333/api/v1/users/auth/login")
);

/**
 * EXPORTS
 */
export { productsAll };
