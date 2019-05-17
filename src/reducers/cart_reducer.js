import types from '../actions/types';

const DEFAULT_STATE = {
  total: null,
  error: null,
};

export default (state=DEFAULT_STATE, action) => {
  const {type, items, total, error} = action;
  switch(type){
    case types.ADD_CART_ITEM:
      return {
        ...state,
        total,
        error: null,
      }
    case types.ADD_CART_ITEM_ERROR:
    return {
      ...state,
      total: null,
      error
    };
    case types.GET_CART_ITEMS:
    return {
      ...state,
      items,
      total,
      error: null,
    }
    default:
      return state;
  }
};
