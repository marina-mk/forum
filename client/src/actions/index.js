/* eslint-disable import/prefer-default-export */
import axios from "axios";
import * as types from "./types";

export const submitAuthData = (values, path) => async (dispatch) => {
  const response = await axios.post(path, values);

  if (response.status === 200) {
    dispatch({ type: types.FETCH_USER_DATA, payload: response.data });
    dispatch({ type: types.RESET_REGISTER_FORM_DATA });
    dispatch({ type: types.RESET_LOGIN_FORM_DATA });
  }
};
