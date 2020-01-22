import axios from 'axios';
import * as types from '../types';

export const setIsOpenedLoginForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_LOGIN_FORM_DATA });
};

export const submitAuthData = (values, path) => async (dispatch) => {
  try {
    const response = await axios.post(path, values);

    if (response.status === 200) {
      dispatch({ type: types.FETCH_USER_DATA, payload: response.data });
      dispatch({ type: types.SET_CLOSED_LOGIN_FORM_DATA });
    }
  } catch (error) {
    dispatch({ type: types.SET_ERROR_LOGIN_FORM_DATA, payload: error.response.data });
  }
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_LOGIN_FORM_DATA });
};
