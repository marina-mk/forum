/* eslint-disable indent */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as types from "../actions/types";
import userReducer from "./userReducer";
import loginFormInitialState from "../components/modals/auth/login/initialState";
import registerFormInitialState from "../components/modals/auth/register/initialState";

export default combineReducers({
  user: userReducer,
  form: formReducer.plugin({
    registerForm: (state, action) => {
      switch (action.type) {
        case types.SET_OPENED_REGISTER_FORM_DATA:
          return { ...state, isOpened: true };
        case types.SET_CLOSED_REGISTER_FORM_DATA:
          return registerFormInitialState;
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
        default:
          return state;
      }
    },
  }),
});
