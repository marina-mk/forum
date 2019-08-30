/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { FETCH_USERDATA } from "./types";

export const submitAuthData = (values, path, history) => async (dispatch) => {
  const response = await axios.post(path, values);
  dispatch({ type: FETCH_USERDATA, payload: response.data });
};
