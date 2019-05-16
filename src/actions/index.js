import types from './types';
import axios from 'axios';
import {supplyHeaders} from '../assets/helpers';

const BASE_URL = "http://api.sc.lfzprototypes.com";

export const addCartItem = (pid, quantity) => async dispatch => {
  try{
    const response = await axios.post(`${BASE_URL}/api/cart/items/${pid}`, {quantity}, supplyHeaders());
    console.log(response);
    // const {products} = response.data;
    // dispatch({
    //   type: types.ADD_CART_ITEM,
      
    // });
  } catch(err) {
    err.networkError = 'There was an error retrieving the cart from the server:'
    console.log(err);
    // dispatch({
    //   type: types.ADD_CART_ITEM_ERROR,
    //   productsError: err
    // });
  }
};

// send auth headers for all cart requests
// patch /api/cart/:itemId, {quantity:2} //adds two items to cart
// negative number decreases from the quantity 
// put /api/cart/items/:itemId, {quantity: 3} // sets that item to that amount
// delete /api/cart/:cartId //deletes your cart and all items
// delete /api/cart/:itemId //deletes that item from your cart

export const getCartItems = () => async dispatch => {
  try{
    const response = await axios.get(`${BASE_URL}/api/cart`, supplyHeaders());
    console.log(response);
    // dispatch({
    //   type: types.GET_ALL_PRODUCTS,
    //   products
    // });
  } catch(err) {
    err.networkError = 'There was an error retrieving the cart from the server:'
    // dispatch({
    //   type: types.GET_ALL_PRODUCTS_ERROR,
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
    err.networkError = 'There was an error retrieving products from the server:'
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
    err.networkError = 'There was an error retrieving product details from the server:'
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
