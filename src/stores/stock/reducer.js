import { FETCH_STOCK_SUCCESS } from "./constants";

const initialState = {
  watchLists: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_SUCCESS:
      return {
        ...state,
        watchLists: {
          ...state.watchLists,
          [action.payload.symbol]: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default reducer;
