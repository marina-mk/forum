/* eslint-disable indent */
import { FETCH_TOPICS_DATA } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TOPICS_DATA:
      return action.payload;
    default:
      return state;
  }
};
