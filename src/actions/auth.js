import { Apiurls } from "../helpers/url";
import axios from "axios";
import * as types from "./actionTypes";
import { openSnackbar } from './snackbar';

export const tokenConfig = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic Og==",
        },
    };
};

export const setIsLoading = (value) => {
    return {
        type: types.SET_IS_LOADING,
        payload: value,
    };
};

export const login = (data) => (dispatch) => {
    const url = Apiurls.login();
    console.log(data)
    axios
        .post(url, data, tokenConfig())
        .then((res) => {

            // const token = res.data.accessToken;
            // localStorage.setItem('jwtToken', token);
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(openSnackbar("Login Successful", "success"));
        })
        .catch((err) => {
            console.log(err);
            // dispatch(returnError(err.message));
            dispatch(openSnackbar("Invalid username or password", "error"));
        });
}



export const logout = () => (dispatch) => {
    // localStorage.clear();
    dispatch({
        type: types.LOGOUT,
    });
    dispatch(openSnackbar("Logout Successful", "success"));
    // alert("Logout Successful")
}


export const signup = (formData) => (dispatch) => {
    const url = Apiurls.createUser();
    dispatch(setIsLoading(true));
    axios
        .post(url, formData, tokenConfig())
        .then((res) => {
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(openSnackbar("Signup Successfull", "success"));
            dispatch(setIsLoading(false));
            // dispatch({
            //   type: types.CREATE_GROUP,
            //   payload: res.data,
            // });
        })
        .catch((err) => {
            // dispatch(returnError(err.message));
        });
};