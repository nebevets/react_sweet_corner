import types from '../actions/types';

const DEFAULT_STATE = {
  data: null,
  error: null,
};

export default (state=DEFAULT_STATE, action) => {
  const {type, products, error} = action;
  switch(type){
    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        data: products
      };
    case types.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        error
      };
    default:
      return {...DEFAULT_STATE};
  }
};
