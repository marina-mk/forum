/* eslint-disable indent */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { RESET_REGISTER_FORM_DATA, RESET_LOGIN_FORM_DATA } from "../actions/types";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  form: formReducer.plugin({
    registerForm: (state, action) => {
      switch (action.type) {
        case RESET_REGISTER_FORM_DATA:
          return undefined;
        default:
          return state;
      }
    },
    loginForm: (state, action) => {
      switch (action.type) {
        case RESET_LOGIN_FORM_DATA:
          return undefined;
        default:
          return state;
      }
    },
  }),
});
