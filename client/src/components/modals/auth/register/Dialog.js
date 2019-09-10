import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import * as types from "../../../../actions/types";
import AuthDialog from "../AuthDialog";
import validate from "./validate";

const submitAuthData = (values, path) => async (dispatch) => {
  axios.post(path, values).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.FETCH_USER_DATA, payload: response.data });
      dispatch({ type: types.SET_CLOSED_REGISTER_FORM_DATA });
    } else {
      const error = new Error(response.error);
      throw error;
    }
  }).catch((error) => {
    dispatch({ type: types.SET_ERROR_REGISTER_FORM_DATA, payload: error.response.data });
  });
};

const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_REGISTER_FORM_DATA });
};

const mapStateToProps = ({ form }) => ({
  isOpened: form.registerForm ? form.registerForm.isOpened : false,
});

const mapDispatchToProps = { submitAuthData, closeForm };

export default reduxForm({ validate, form: "registerForm" })(connect(mapStateToProps, mapDispatchToProps)(AuthDialog));
