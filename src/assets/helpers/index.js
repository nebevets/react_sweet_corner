import {CART_TOKEN} from '../../actions/index';

export const convertToDollarsandCents = (cents) => {
  const dollarsAndCents = cents/100;
  return `$${dollarsAndCents.toFixed(2)}`
};

export const withLocalStorageToken = () => {
  return {
    headers: {
      'x-cart-token': localStorage.getItem(CART_TOKEN) || ''
    }
  }
}