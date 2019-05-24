import types from '../actions/types';

const DEFAULT_STATE = {
  orders: null,
  ordersError: null,
};

export default (state=DEFAULT_STATE, action) => {
  const {type, orders, ordersError} = action;
  switch(type){
    case types.GET_ALL_ORDERS:
      return {
        ...state,
        orders,
        ordersError: null,
      };
    case types.GET_ALL_ORDERS_ERROR:
      return {
        ...state,
        ordersError
      };
    default:
      return state;
  }
};
