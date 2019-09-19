/* eslint-disable indent */
import { FETCH_SECTIONS_DATA } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SECTIONS_DATA:
      return action.payload;
    default:
      return state;
  }
};
