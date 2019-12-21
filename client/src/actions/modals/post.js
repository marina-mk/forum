import axios from 'axios';
import * as types from '../types';
import { fetchPosts } from '..';

export const setIsOpenedPostForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_POST_FORM_DATA });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_POST_FORM_DATA });
};

export const updatePostFormEditorState = (editorState) => (dispatch) => {
  dispatch({ type: types.SET_UPDATED_POST_FORM_EDITOR_STATE, payload: editorState });
};

export const submitData = (data, sectionId, topicId) => async (dispatch) => {
  axios.post(`/api/sections/${sectionId}/topics/${topicId}/posts`, data).then((response) => {
    if (response.status === 201) {
      dispatch({ type: types.SET_CLOSED_POST_FORM_DATA });
      fetchPosts(sectionId, topicId)(dispatch); // call subsequent action to fetch posts (method GET)
    }
  }).catch((error) => {
    dispatch({ type: types.SET_ERROR_POST_FORM_DATA, payload: error.response.data });
  });
};
