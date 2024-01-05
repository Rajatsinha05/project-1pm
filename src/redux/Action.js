import axios from "axios";
import {
  ADD_CART,
  ADD_PRODUCT,
  GET_CART,
  GET_PRODUCT,
  LOGIN,
  LOGOUT,
  REMOVE_PRODUCT,
  SIGNUP,
  SINGLE_PRODUCT,
} from "./ActionType";

export const signup = (data) => {
  return {
    type: SIGNUP,
    payload: data,
  };
};

export const login = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const addProduct = (data) => async (dispatch) => {
  let res = await axios.post(" http://localhost:8090/products", data);

  dispatch({
    type: ADD_PRODUCT,
    payload: res.data,
  });
};

export const GetProduct = () => async (dispatch) => {
  let res = await axios.get("http://localhost:8090/products");
  dispatch({
    type: GET_PRODUCT,
    payload: res.data,
  });
};

export const singleProduct = (id) => async (dispatch) => {
  let res = await axios.get(`http://localhost:8090/products/${id}`);
  dispatch({
    type: SINGLE_PRODUCT,
    payload: res.data,
  });
};

export const addCart = (data) => async (dispatch) => {
  let res = await axios.post(" http://localhost:8090/cart", data);

  dispatch({
    type: ADD_CART,
    payload: res.data,
  });
};



export const GetCart = () => async (dispatch) => {
  let res = await axios.get("http://localhost:8090/cart");
  dispatch({
    type: GET_CART,
    payload: res.data,
  });
};




export const deleteCart = (id) => async (dispatch) => {
  let res = await axios.delete(`http://localhost:8090/cart/${id}`);
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id,
  });
};


