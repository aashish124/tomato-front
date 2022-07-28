import * as types from "../actions/actionTypes";

const initialState = {
    restaurantsList: [],
    singleRestaurant: {},
    singleRestaurantItems: [],
    error: "",
    // isLoading: true,
    restaurantLoading: true,
};

const restaurants = (state = initialState, action) => {
    switch (action.type) {
      case types.RESTAURANT_LOADING:
          return {
            ...state,
            // isLoading: action.payload,
            restaurantLoading: action.payload,
          };
        case types.GET_ALL_RESTAURANTS:
          return {
            ...state,
            restaurantsList: action.payload,
            restaurantLoading: false,
          };

        case types.GET_SINGLE_RESTAURANT:
          return {
              ...state,
              singleRestaurant: action.payload.restaurant,
              singleRestaurantItems: action.payload.items,
              // isLoading: false,
              restaurantLoading: false,
          };

        case types.RESTAURANT_ERROR:
          return {
            ...state,
            error: action.payload,
            // isLoading: false,
            restaurantLoading: false,
          };
    
        default:
          return state;
      }
};

export default restaurants;