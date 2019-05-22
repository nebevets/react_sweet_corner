import {CART_TOKEN} from '../../actions/index';
import {AUTH_TOKEN} from '../../actions/index';

export const convertToDollarsandCents = (cents) => {
  const dollarsAndCents = cents/100;
  return `$${dollarsAndCents.toFixed(2)}`
};

export const withLocalStorageToken = () => {
  return {
    headers: {
      'authorization': localStorage.getItem(AUTH_TOKEN) || '',
      'x-cart-token': localStorage.getItem(CART_TOKEN) || '',
    }
  }
}