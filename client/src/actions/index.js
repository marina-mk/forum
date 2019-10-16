/* eslint-disable no-empty */
import axios from 'axios';
import * as types from './types';

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/auth');
    dispatch({ type: types.FETCH_USER_DATA, payload: response.data });
  } catch (err) {}
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.delete('/api/logout');
    dispatch({ type: types.DELETE_USER_DATA });
  } catch (err) {}
};

export const fetchSections = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/sections');
    dispatch({ type: types.FETCH_SECTIONS_DATA, payload: response.data });
  } catch (err) {}
};

export const fetchTopics = (section) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/topics/${section}`);
    dispatch({ type: types.FETCH_TOPICS_DATA, payload: response.data });
  } catch (err) {}
};
