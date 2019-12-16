/* eslint-disable indent */
import { FETCH_CURRENT_TOPIC_DATA, DROP_CURRENT_TOPIC_DATA } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_TOPIC_DATA:
      return action.payload;
    case DROP_CURRENT_TOPIC_DATA:
      return null;
    default:
      return state;
  }
};
