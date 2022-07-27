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

// export const actFetchProductsRequest = () => {
//     return (dispatch) => {
//         return callApi('/products', 'GET', null).then(res => {
          
//             dispatch(GetAllProduct(res.data));
//         });
//     }
// }



/*GET NUMBER CART*/
export function GetNumberCart(){
    return{
        type:types.GET_NUMBER_CART
    }
}

export function AddCart(payload){
    console.log(payload);
    return {
        type:types.ADD_CART,
        payload
    }
}
export function UpdateCart(payload){
    return {
        type:types.UPDATE_CART,
        payload
    }
}

export function IncreaseQuantity(payload){
    return{
        type:types.INCREASE_QUANTITY,
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:types.DECREASE_QUANTITY,
        payload
    }
}


export function DeleteCart(payload){
    return{
        type:types.DELETE_CART,
        payload
    }
}

export function DeleteItem(payload){
    return{
        type:types.DELETE_ITEM,
        payload
    }
}
