import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.sc.lfzprototypes.com";

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
