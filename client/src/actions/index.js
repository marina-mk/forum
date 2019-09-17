import axios from 'axios';
import * as types from './types';

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get('/api/auth');
  dispatch({ type: types.FETCH_USER_DATA, payload: response.data });
};

export const logoutUser = () => async (dispatch) => {
  await axios.delete('/api/logout');
  dispatch({ type: types.DELETE_USER_DATA });
};
