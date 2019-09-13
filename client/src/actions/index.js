import axios from "axios";
import { FETCH_USER_DATA } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/auth");
  dispatch({ type: FETCH_USER_DATA, payload: response.data });
};
