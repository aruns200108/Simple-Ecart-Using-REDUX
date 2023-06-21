import { FAIL, SUCCESS } from "./cartConstats"



//reducer

//state=       ,action= 
export const cartReducer=(state={cartList:[]},action)=>{

switch(action.type){
    case SUCCESS:
    return{
        cartList:action.payload
    }
    case FAIL: return{
        cartList:action.payload
    }
    default:
        return state
}

}