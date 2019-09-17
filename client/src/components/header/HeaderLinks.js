/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import * as types from "../../actions/types";

const HeaderLinks = ({
  user, logout, setIsOpenedLoginForm, setIsOpenedRegisterForm,
}) => {
  if (user) {
    return (
      <li className="nav-item">
        <a className="nav-link" onClick={logout}>Выход</a>
      </li>
    );
  }

  return [
    <li className="nav-item" key="login">
      <a className="nav-link" onClick={setIsOpenedLoginForm}>Вход</a>
    </li>,
    <li className="nav-item" key="register">
      <a className="nav-link" onClick={setIsOpenedRegisterForm}>Регистрация</a>
    </li>,
  ];
};

HeaderLinks.propTypes = {
  setIsOpenedLoginForm: PropTypes.func.isRequired,
  setIsOpenedRegisterForm: PropTypes.func.isRequired,
};

const setIsOpenedLoginForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_LOGIN_FORM_DATA });
};

const setIsOpenedRegisterForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_REGISTER_FORM_DATA });
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { logout: logoutUser, setIsOpenedLoginForm, setIsOpenedRegisterForm };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
