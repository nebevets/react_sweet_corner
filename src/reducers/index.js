import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import productsReducer from './products_reducer';
import cartReducer from './cart_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  cart: cartReducer,
  login: userReducer,
});

export default rootReducer;
