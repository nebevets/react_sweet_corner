import types from '../actions/types';

const DEFAULT_STATE = {
  auth: false,
  user: null,
  signInError: null,
  signUpError: null,
};

export default (state=DEFAULT_STATE, action) => {
  const {type} = action;
  switch(type){
    case types.CLEAR_ERRORS:
      return {...state, signInError: null, signUpError: null};
    case types.SIGN_IN_ERROR:
      return {...state, auth: false, user: null, signInError: action.error};
    case types.SIGN_UP_ERROR:
      return {...state, auth: false, user: null, signUpError: action.error};
    case types.SIGN_UP:
    case types.SIGN_IN:
      return {
        ...state,
        auth: true,
        user: action.user || null,
        signInError: null,
        signUpError: null,
      };
    case types.SIGN_OUT:
      return {...DEFAULT_STATE};
    default:
      return state;
  }
}