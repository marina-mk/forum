import axios from 'axios';
import * as types from '../types';
import { fetchTopics } from '..';

export const submitData = (values, section) => async (dispatch) => {
  axios.post(`/api/topics/${section}`, values).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
      fetchTopics(section)(dispatch); // call subsequent action to fetch topics (method GET)
    }
  }).catch((error) => {
    dispatch({ type: types.SET_ERROR_TOPIC_FORM_DATA, payload: error.response.data });
  });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
};
