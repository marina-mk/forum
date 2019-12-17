import * as types from '../types';

export const setIsOpenedPostForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_POST_FORM_DATA });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_POST_FORM_DATA });
};
