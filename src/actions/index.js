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
    err.getAllProductsError = 'There was an error retrieving products from the server:'
    dispatch({
      type: types.GET_ALL_PRODUCTS_ERROR,
      error: err
    });
  }
}
