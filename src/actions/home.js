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
        type: types.RESTAURANT_ERROR,
        payload: msg,
    };
};

export const setIsLoading = (value) => {
  return {
      type: types.RESTAURANT_LOADING,
      payload: value,
  };
};
  

export const getHomeDetails = (userId) => (dispatch) => {
    const url = Apiurls.getHomeDetails();
    //console.log(url);
    dispatch(setIsLoading(true));
    const data = {
        userId: userId,
    }
    console.log(data);
    axios
      .post(url, data,  tokenConfig())
      .then((res) => {
        console.log(res);
        

        dispatch({
            type: types.LOGIN_SUCCESS,
            payload: res.data.userHomeDetail,
        })

        dispatch({
          type: types.GET_ALL_RESTAURANTS,
          payload: res.data.restaurantHomeDetails,
        });
      })
      .catch((err) => {
        dispatch(returnError(err.message));
      });
      
};
