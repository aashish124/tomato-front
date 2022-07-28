import * as types from "../actions/actionTypes";

const initialState = {
    ordersList: [],
    error: "",
    // isLoading: true,
    orderLoading: true,
};

const orders = (state = initialState, action) => {
    switch (action.type) {
      case types.ORDER_LOADING:
          return {
            ...state,
            // isLoading: action.payload,
            orderLoading: action.payload,
          };
        case types.GET_ALL_ORDERS:
          return {
            ...state,
            ordersList: action.payload,
            orderLoading: false,
          };
    
        default:
          return state;
      }
};

export default orders;