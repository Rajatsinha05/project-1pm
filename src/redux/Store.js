import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { User } from "./reducers/User";
import { product } from "./reducers/Product";
import { thunk } from "redux-thunk";

let combine = combineReducers({
  user: User,
  products: product,
});

export const Store = legacy_createStore(combine, applyMiddleware(thunk));
