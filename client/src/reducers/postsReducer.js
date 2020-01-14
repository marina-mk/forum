/* eslint-disable indent */
import { FETCH_POSTS_DATA, DROP_POSTS_DATA } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_DATA:
      return action.payload;
    case DROP_POSTS_DATA:
      return [];
    default:
      return state;
  }
};
