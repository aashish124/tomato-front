// import * as types from "../actions/actionTypes";
import * as types from "../actions/actionTypes";

const initialState = {
    snackbarOpen: false,
    snackbarMsg: "",
    snackbarVariant: ""
};

const snackbar = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_SNACKBAR:
          return {
            ...state,
            snackbarOpen: true,
            snackbarMsg: action.payload,
            snackbarVariant: action.variant
          };
        
        case types.CLOSE_SNACKBAR:
          return {
            ...state,
            snackbarOpen: false,
            snackbarMsg: "",
          };
    
        default:
          return state;
    }
};

export default snackbar;