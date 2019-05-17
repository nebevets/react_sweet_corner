import types from './types';
import axios from 'axios';
import {withLocalStorageToken} from '../assets/helpers';

const BASE_URL = "http://api.sc.lfzprototypes.com";
export const CART_TOKEN = 'cart-token';

export const addCartItem = (pid, quantity=1) => async dispatch => {
  try{
    const response = await axios.post(`${BASE_URL}/api/cart/items/${pid}`, {quantity}, withLocalStorageToken());
    const {total, cartToken} = response.data;
    localStorage.setItem(CART_TOKEN, cartToken);
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
  console.log('deleteCartItem called with: ', pid);
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

// send localStorageToken with all cart requests

// patch /api/cart/:itemId, {quantity:2} //adds two items to cart
// negative number decreases from the quantity 

// put /api/cart/items/:itemId, {quantity: 3} // sets that item to that amount

// delete /api/cart/ //deletes your cart and all items



export const getCartItems = () => async dispatch => {
  try{
    const response = await axios.get(`${BASE_URL}/api/cart`, withLocalStorageToken());
    // console.log(response);
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
