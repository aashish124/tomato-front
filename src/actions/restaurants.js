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
  

export const getAllRestaurantsList = () => (dispatch) => {
    const url = Apiurls.getAllRestaurants();
  //console.log(url);
    dispatch(setIsLoading(true));
    axios
      .get(url,  tokenConfig())
      .then((res) => {
        dispatch({
          type: types.GET_ALL_RESTAURANTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnError(err.message));
      });
      
};


export const getSingleRestaurant = (name) => (dispatch) => {
    const url = Apiurls.getSingleRestaurant();
    // dispatch(setIsLoading(true));
    axios
      .get(url, { params: { name: name } }, tokenConfig())
      .then((res) => {
      //console.log(res.data);
        dispatch({
          type: types.GET_SINGLE_RESTAURANT,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnError(err.message));
      });
};
