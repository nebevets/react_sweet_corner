import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.sc.lfzprototypes.com";

export const getAllProducts = () => async dispatch => {
  const response = await axios.get(`${BASE_URL}/api/products`);
  console.log(response);
}
