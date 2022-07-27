import * as types from "./actionTypes";

export const openSnackbar = (msg, variant) => {
    console.log(msg);
    return {
        type: types.OPEN_SNACKBAR,
        payload: msg,
        variant: variant
    };
};

export const closeSnackbar = () => {
    return {
        type: types.CLOSE_SNACKBAR,
    };
};