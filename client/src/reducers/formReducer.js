/* eslint-disable indent */
import { reducer as formReducer } from 'redux-form';
import * as types from '../actions/types';
import loginFormInitialState from '../components/modals/auth/login/initialState';
import registerFormInitialState from '../components/modals/auth/register/initialState';

export default formReducer.plugin({
  registerForm: (state, action) => {
    switch (action.type) {
      case types.SET_OPENED_REGISTER_FORM_DATA:
        return { ...state, isOpened: true };
      case types.SET_CLOSED_REGISTER_FORM_DATA:
        return registerFormInitialState;
      case types.SET_ERROR_REGISTER_FORM_DATA:
          return { ...state, error: action.payload };
      default:
        return state;
    }
  },
  loginForm: (state, action) => {
    switch (action.type) {
      case types.SET_OPENED_LOGIN_FORM_DATA:
        return { ...state, isOpened: true };
      case types.SET_CLOSED_LOGIN_FORM_DATA:
        return loginFormInitialState;
      case types.SET_ERROR_LOGIN_FORM_DATA:
          return { ...state, error: action.payload };
      default:
        return state;
    }
  },
});
