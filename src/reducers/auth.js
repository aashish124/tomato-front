import * as types from "../actions/actionTypes";
const initialState = {

    isLoggedIn: false,
    name: "",
    userId: null,
    isLoading: true,
    
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
              ...state,
                isLoggedIn: true,
                name: action.payload.name,
                userId: action.payload.userId,
                isLoading: false,
            };

        case types.LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
            name: "",
            userId: null,
            isLoading: false,
          };

        case types.SET_IS_LOADING:
            return {
              ...state,
              isLoading: action.payload
            };
          
          default:
            return state;
        }
};

export default auth;