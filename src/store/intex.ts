import { combineReducers, createStore } from "redux";
import { productReducer } from "./product_reducer";
import { cartReducer } from "./cart_reducer";
import { wishListReducer } from "./wishlist_reducer";


const reducer = combineReducers({
    "product": productReducer,
    "cart":cartReducer,
    "wishlist":wishListReducer
})
export const storeOld = createStore(reducer)