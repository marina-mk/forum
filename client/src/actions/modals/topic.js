import axios from 'axios';
import * as types from '../types';
import { fetchTopics } from '..';

export const submitData = (values, sectionId) => async (dispatch) => {
  axios.post(`/api/sections/${sectionId}/topics`, values).then((response) => {
    if (response.status === 201) {
      dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
      fetchTopics(sectionId)(dispatch); // call subsequent action to fetch topics (method GET)
    }
  }).catch((error) => {
    dispatch({ type: types.SET_ERROR_TOPIC_FORM_DATA, payload: error.response.data });
  });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
};
