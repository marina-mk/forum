import axios from 'axios';
import * as types from '../types';
import { fetchTopics } from '..';
import { updateSectionTopicsCount, updateUserTopicsCount } from '../../utils/actions/supplementaryRequests';

export const setIsOpenedTopicForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_TOPIC_FORM_DATA });
};

export const submitData = (values, sectionId, username) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/sections/${sectionId}/topics`, values);

    if (response.status === 201) {
      dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
      fetchTopics(sectionId)(dispatch); // call subsequent action to fetch topics (method GET)
      updateSectionTopicsCount(sectionId, 1);
      updateUserTopicsCount(username, 1);
    }
  } catch (error) {
    dispatch({ type: types.SET_ERROR_TOPIC_FORM_DATA, payload: error.response.data });
  }
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
};
