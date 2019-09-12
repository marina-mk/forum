/* eslint-disable indent */
import { FETCH_USER_DATA, DELETE_USER_DATA } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return action.payload || false;
    case DELETE_USER_DATA:
        return null;
    default:
      return state;
  }
};
