import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/CartReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartsState: cartReducer,
});

export default rootReducer;
