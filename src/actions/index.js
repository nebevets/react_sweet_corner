import types from './types';
import axios from 'axios';
import {withLocalStorageToken} from '../assets/helpers';

const BASE_URL = "http://api.sc.lfzprototypes.com";
export const CART_TOKEN = 'cart-token';
export const AUTH_TOKEN = 'auth-token';

export const addCartItem = (pid, quantity=1) => async dispatch => {
  try{
    const response = await axios.post(`${BASE_URL}/api/cart/items/${pid}`, {quantity}, withLocalStorageToken());
    const {total, cartToken} = response.data;
    cartToken && localStorage.setItem(CART_TOKEN, cartToken);
    dispatch({
      type: types.ADD_CART_ITEM,
      total,
    });
  } catch(err) {
    err.networkError = 'There was an error adding to the cart, from the address:'
    console.log(err);
    dispatch({
      type: types.ADD_CART_ITEM_ERROR,
      cartError: err
    });
  }
};

// delete /api/cart/items/:itemId Delete that item //deletes that item from your cart
export const deleteCartItem = (pid) => async dispatch => {
  try{
    const response = await axios.delete(`${BASE_URL}/api/cart/items/${pid}`, withLocalStorageToken());
    console.dir(response);
    const {total} = response.data;
    dispatch({
      type: types.DELETE_CART_ITEM,
      total,
    });
  } catch(err) {
    err.networkError = 'There was an error adding to the cart, from the address:'
    console.log(err);
    // dispatch({
    //   type: types.DELETE_CART_ITEM_ERROR,
    //   cartError: err
    // });
  }
};

// patch /api/cart/:itemId, {quantity:2} //adds two items to cart
// negative number decreases from the quantity 
// delete /api/cart/ //deletes your cart and all items

// put /api/cart/items/:itemId, {quantity: 3} // sets that item to that amount
export const putCartItem = (pid, quantity=1) => async dispatch => {
  try{
    const response = await axios.put(`${BASE_URL}/api/cart/items/${pid}`, {quantity}, withLocalStorageToken());
    const {total} = response.data;
    dispatch({
      type: types.PUT_CART_ITEM,
      total,
    });
  } catch(err) {
    err.networkError = 'There was an error changing the quantity, from the address:'
    console.log(err);
    dispatch({
      type: types.PUT_CART_ITEM_ERROR,
      cartError: err
    });
  }
};

export const getCartItems = () => async dispatch => {
  try{
    const response = await axios.get(`${BASE_URL}/api/cart`, withLocalStorageToken());
    const {items, total} = response.data;
    dispatch({
      type: types.GET_CART_ITEMS,
      items,
      total
    });
  } catch(err) {
    err.networkError = 'There was an error retrieving the cart from the address:'
    console.log(err);
    // dispatch({
    //   type: types.GET_CART_ITEMS_ERROR,
    //   productsError: err
    // });
  }
};

export const getCartTotals = () => async dispatch => {
  try{
    const response = await axios.get(`${BASE_URL}/api/cart/totals`, withLocalStorageToken());
    const {total} = response.data;
    dispatch({
      type: types.GET_CART_TOTALS,
      total
    });
  } catch(err) {
    err.networkError = 'There was an error retrieving the cart totals from the address:'
    console.log(err);
    // dispatch({
    //   type: types.GET_CART_ITEMS_ERROR,
    //   productsError: err
    // });
  }
};

export const getAllProducts = () => async dispatch => {
  try{
    const response = await axios.get(`${BASE_URL}/api/products`);
    const {products} = response.data;
    dispatch({
      type: types.GET_ALL_PRODUCTS,
      products
    });
  } catch(err) {
    err.networkError = 'There was an error retrieving products from the address:'
    dispatch({
      type: types.GET_ALL_PRODUCTS_ERROR,
      productsError: err
    });
  }
};

export const getProductDetails = productId => async dispatch => {
  try{
    const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
    const {product} = response.data;
    dispatch({
      type: types.GET_PRODUCT_DETAILS,
      product
    });
  } catch(err) {
    err.networkError = 'There was an error retrieving product details from the address:'
    dispatch({
      type: types.GET_PRODUCT_DETAILS_ERROR,
      detailsError: err
    });
  }
};

export const clearProductDetails = () => {
  return {
    type: types.CLEAR_PRODUCT_DETAILS,
  };
};

export const clearErrors = () => ({type: types.CLEAR_ERRORS});
// parens are need to distiguish between function braces and object braces

export const verifyAuth = () =>
  async dispatch => {
    try {
      const response = await axios.get('http://api.sc.lfzprototypes.com/auth/sign-in', withLocalStorageToken());
      dispatch({
        type: types.SIGN_IN,
        user: response.data.user
      });
    } catch(err) {
      localStorage.removeItem('sc_token');
      dispatch({
        type: types.SIGN_OUT
      });
    }
  };

// steveben@msn.com, asDF1234!
export const signIn = signInData => 
  async dispatch => {
    try {
      const response = await axios.post('http://api.sc.lfzprototypes.com/auth/sign-in', signInData, withLocalStorageToken());
      console.log('sign in response' , response);
      const {token, user} = response.data;
      localStorage.setItem(AUTH_TOKEN, token);
      dispatch({
        type: types.SIGN_IN,
        user
      });
    } catch(err) {
      console.log(err);
      dispatch({
        type: types.SIGN_IN_ERROR,
        error: 'Invalid email or password'
      });
    }
  }

export const signOut = () => {
  localStorage.removeItem(AUTH_TOKEN);
  return {
    type: types.SIGN_OUT
  }
};

export const signUp = signUpData => 
  async (dispatch) => {
    try {
      const response = await axios.post('http://api.sc.lfzprototypes.com/auth/create-account', signUpData);
      const {token, user} = response.data;
      localStorage.setItem('sc_token', token);
      dispatch({
        type: types.SIGN_UP,
        user
      });
    } catch(err) {
      console.log(err.response);
      let errorMessage = 'Error creating account';
      if(err.response.status === 422){
        errorMessage = err.response.data.errors || errorMessage;
      }
      dispatch({
        type: types.SIGN_UP_ERROR,
        error: errorMessage
      });
    }
  };
