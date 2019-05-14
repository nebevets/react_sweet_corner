import types from '../actions/types';

const DEFAULT_STATE = {
  data: null,
  productsError: null,
  details: null,
  detailsError: null,
};

export default (state=DEFAULT_STATE, action) => {
  const {type, products, product, productsError, detailsError} = action;
  switch(type){
    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        data: products,
        productsError: null,
      };
    case types.GET_PRODUCT_DETAILS:
      return {
        ...state,
        details: product,
        detailsError: null,
      };
    case types.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        productsError
      };
    case types.GET_PRODUCT_DETAILS_ERROR:
    return {
      ...state,
      detailsError
    };
    default:
      return state;
  }
};
