import axios from 'axios';
import * as types from '../types';

export const setIsOpenedRegisterForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_REGISTER_FORM_DATA });
};

export const submitAuthData = (values, path) => async (dispatch) => {
  axios.post(path, values).then((response) => {
    if (response.status === 201) {
      dispatch({ type: types.FETCH_USER_DATA, payload: response.data });
      dispatch({ type: types.SET_CLOSED_REGISTER_FORM_DATA });
    }
  }).catch((error) => {
    dispatch({ type: types.SET_ERROR_REGISTER_FORM_DATA, payload: error.response.data });
  });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_REGISTER_FORM_DATA });
};
