import types from '../actions/types';

const DEFAULT_STATE = {
  total: null,
  error: null,
};

export default (state=DEFAULT_STATE, action) => {
  console.log(state);
  const {type, items, total, message, error} = action;
  console.log('cart action: ', action);
  switch(type){
    case types.CLEAR_HEADER_MESSAGE:
      return{
        ...state,
        message: undefined,
      }
    case types.GET_CART_TOTALS:
    case types.PUT_CART_ITEM:
    case types.ADD_CART_ITEM:
      return {
        ...state,
        total,
        message,
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
        message,
        error: null,
      };
    case types.GET_CART_ITEMS:
      return {
        ...state,
        items,
        total,
        error: null,
      };
    case types.DELETE_CART:
    case types.CHECK_OUT_CART:
      return {
        ...DEFAULT_STATE,
        message
      }
    case types.SIGN_OUT:
      return DEFAULT_STATE;
    default:
      return state;
  }
};
