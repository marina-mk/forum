/* eslint-disable indent */
import { FETCH_CURRENT_SECTION_DATA, DROP_CURRENT_SECTION_DATA } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_SECTION_DATA:
      return action.payload;
    case DROP_CURRENT_SECTION_DATA:
      return null;
    default:
      return state;
  }
};
