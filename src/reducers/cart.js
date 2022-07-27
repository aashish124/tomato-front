import * as types from "../actions/actionTypes";

const initialState = {
    numberCart:0,
    Carts:[],
    _products:[]
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCT: 
            return{
                ...state,
                _products:action.payload
            }
        case types.GET_NUMBER_CART:
            return{
                ...state
            }
        case types.ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    itemId:action.payload.itemId,
                    quantity:1,
                    name:action.payload.name,
                    image_url:action.payload.image_url,
                    price:action.payload.price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.itemId==action.payload.itemId){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        itemId:action.payload.itemId,
                        quantity:1,
                        name:action.payload.name,
                        image_url:action.payload.image_url,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
        case types.INCREASE_QUANTITY:

            state.numberCart++
            let check1 = false;
            state.Carts.map((item,key)=>{
                if(item.itemId == action.payload.itemId){
                    state.Carts[key].quantity++;
                    check1=true;
                }
            });
            if(!check1){
                let _cart = {
                    itemId:action.payload.itemId,
                    quantity:1,
                    name:action.payload.name,
                    image_url:action.payload.image_url,
                    price:action.payload.price
                }
                state.Carts.push(_cart);
            }
          
           return{
               ...state
           }
        case types.DECREASE_QUANTITY:

            state.Carts.map((item,key)=>{
                if(item.itemId == action.payload.itemId){
                    state.numberCart--;
                    state.Carts[key].quantity--;
                    if(state.Carts[key].quantity == 0){
                        var temp = state.Carts.filter(i=>{
                            return i.itemId!=action.payload.itemId
                        })
                        console.log(temp);
                        state.Carts = temp;
                    }
                }
            });
          
            return{
                ...state
            }
        case types.DELETE_ITEM:
            let quantity_ = state.Carts[action.payload].quantity;
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.itemId!=state.Carts[action.payload].id
                })
               
            }
        case types.DELETE_CART:
                return{
                    ...state,
                    numberCart: 0,
                    Carts: [],
                   
                }
        default:
            return state;
      }
};

export default cart;