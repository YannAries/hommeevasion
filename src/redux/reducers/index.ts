import { combineReducers } from "redux";

import { user } from "./userReducer";
import products from "./productReducer";
import orders from "./orderReducer";
import wishlist from "./wishlistReducer";
import cart from "./cartReducer";
import addresses from "./addressReducer";
import alert from "./alertReducer";
import { actionConst } from "utilities/constants";

const appReducer = combineReducers({
  user,
  products,
  orders,
  wishlist,
  cart,
  addresses,
  alert,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
