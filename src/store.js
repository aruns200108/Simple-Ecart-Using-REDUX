import {combineReducers, createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./cartReducer"


//reducer
const reducer=combineReducers({
 reducer1:cartReducer
})

//create middleware
const middleware=[thunk]

//create store
const store=createStore(reducer,applyMiddleware(...middleware))

//export
export default store
