import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import { FETCH_USER_DATA, SET_CLOSED_LOGIN_FORM_DATA } from "../../../../actions/types";
import AuthDialog from "../AuthDialog";
import fields from "./fields";
import validateAuth from "../validateAuth";

const submitAuthData = (values, path) => async (dispatch) => {
  const response = await axios.post(path, values);

  if (response.status === 200) {
    dispatch({ type: FETCH_USER_DATA, payload: response.data });
    dispatch({ type: SET_CLOSED_LOGIN_FORM_DATA });
  }
};

const closeForm = () => (dispatch) => {
  dispatch({ type: SET_CLOSED_LOGIN_FORM_DATA });
};

const mapStateToProps = ({ form }) => ({
  isOpened: form.loginForm ? form.loginForm.isOpened : false,
});

const mapDispatchToProps = { submitAuthData, closeForm };

export default reduxForm({
  validate: (values) => validateAuth(fields, values),
  form: "loginForm",
})(connect(mapStateToProps, mapDispatchToProps)(AuthDialog));
