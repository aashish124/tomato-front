import { Apiurls } from "../helpers/url";
import axios from "axios";
import * as types from "./actionTypes";

export const tokenConfig = () => {
    return {
        headers: {
            "Content-Type": "application/json",
        },
    };
};

export const returnError = (msg) => {
    return {
        type: types.ORDER_ERROR,
        payload: msg,
    };
};

export const setIsLoading = (value) => {
  return {
      type: types.ORDER_LOADING,
      payload: value,
  };
};
  

export const getAllOrders = (userId) => (dispatch) => {
    const url = Apiurls.getAllOrders();
    //console.log(url);
    // dispatch(setIsLoading(true));
    const data = {
        userId: userId,
    }
    axios
      .post(url, data,  tokenConfig())
      .then((res) => {

        dispatch({
          type: types.GET_ALL_ORDERS,
          payload: res.data,
        });

      })
      .catch((err) => {
        dispatch(returnError(err.message));
      });
      
};
