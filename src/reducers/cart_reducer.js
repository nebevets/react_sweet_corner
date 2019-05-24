import types from '../actions/types';

const DEFAULT_STATE = {
  total: null,
  error: null,
};

export default (state=DEFAULT_STATE, action) => {
  console.log(state);
  const {type, items, total, id, message, error} = action;
  console.log('cart action: ', action);
  switch(type){
    case types.GET_CART_TOTALS:
    case types.PUT_CART_ITEM:
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
    case types.PUT_CART_ITEM_ERROR:
    case types.DELETE_CART_ITEM:
      return {
        ...state,
        total,
        error: null,
      };
    case types.GET_CART_ITEMS:
      return {
        ...state,
        items,
        total,
        error: null,
      };
    case types.CHECK_OUT_CART:
      return {
        id,
        message,
        ...DEFAULT_STATE,
      }
    case types.SIGN_OUT:
      return DEFAULT_STATE;
    default:
      return state;
  }
};
