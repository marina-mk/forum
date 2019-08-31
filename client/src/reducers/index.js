/* eslint-disable indent */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as types from "../actions/types";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  form: formReducer.plugin({
    registerForm: (state, action) => {
      switch (action.type) {
        case types.SET_OPENED_REGISTER_FORM_DATA:
          return { ...state, isOpened: true };
        case types.RESET_REGISTER_FORM_DATA:
          return undefined;
        default:
          return state;
      }
    },
    loginForm: (state, action) => {
      switch (action.type) {
        case types.SET_OPENED_LOGIN_FORM_DATA:
          return { ...state, isOpened: true };
        case types.RESET_LOGIN_FORM_DATA:
          return undefined;
        default:
          return state;
      }
    },
  }),
});
