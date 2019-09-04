import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import { FETCH_USER_DATA, SET_CLOSED_REGISTER_FORM_DATA } from "../../../../actions/types";
import AuthDialog from "../AuthDialog";

const mapStateToProps = ({ form }) => ({
  isOpened: form.registerForm ? form.registerForm.isOpened : false,
});

const submitAuthData = (values, path) => async (dispatch) => {
  const response = await axios.post(path, values);

  if (response.status === 200) {
    dispatch({ type: FETCH_USER_DATA, payload: response.data });
    dispatch({ type: SET_CLOSED_REGISTER_FORM_DATA });
  }
};

const closeForm = () => (dispatch) => {
  dispatch({ type: SET_CLOSED_REGISTER_FORM_DATA });
};

export default reduxForm({ form: "registerForm" })(
  connect(mapStateToProps, { submitAuthData, closeForm })(AuthDialog),
);
