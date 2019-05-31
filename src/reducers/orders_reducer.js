import types from '../actions/types';

const DEFAULT_STATE = {
  orders: null,
  ordersError: null,
  orderDetail: null,
  orderDetailError: null,
};

export default (state=DEFAULT_STATE, action) => {
  const {type, orders, ordersError, data, orderDetailsError} = action;
  switch(type){
    case types.GET_ALL_ORDERS:
      return {
        orders,
        ordersError: null,
      };
    case types.GET_ORDER_DETAILS_ERROR:
    case types.GET_ALL_ORDERS_ERROR:
      return {
        ordersError,
        orderDetailsError
      };
    case types.GET_ORDER_DETAILS:
      return {
        orderDetail: {...data},
        orderDetailsError: null
      }
    default:
      return state;
  }
};
