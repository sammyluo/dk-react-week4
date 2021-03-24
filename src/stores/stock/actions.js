import axios from "axios";
import { FETCH_STOCK_SUCCESS } from "./constants";
import { createAction } from "../utils";
import configs from "../../config";

export const stocksActions = {
  fetchStock: (symbol) => (dispatch, getState) => {
    axios(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${configs.API_TOKEN}`
    ).then(({ data }) => {
      dispatch(createAction(FETCH_STOCK_SUCCESS, { symbol, data }));
    });
  },
};
