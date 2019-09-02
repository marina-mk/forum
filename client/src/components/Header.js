/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import headImage from "../images/head_img.jpg";
import { SET_OPENED_REGISTER_FORM_DATA, SET_OPENED_LOGIN_FORM_DATA } from "../actions/types";

const Header = ({ setIsOpenedLoginForm, setIsOpenedRegisterForm }) => (
  <>
    <img src={headImage} className="img-fluid" alt="Forum header" />

    <nav className="main navbar navbar-expand-sm bg-dark navbar-dark sticky-top mx-0 px-3">
      <a className="navbar-brand" href="https://lit-ocean-46169.herokuapp.com">Форум</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" onClick={setIsOpenedLoginForm}>Вход</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={setIsOpenedRegisterForm}>Регистрация</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

Header.propTypes = {
  setIsOpenedLoginForm: PropTypes.func.isRequired,
  setIsOpenedRegisterForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setIsOpenedLoginForm: () => dispatch({ type: SET_OPENED_LOGIN_FORM_DATA }),
  setIsOpenedRegisterForm: () => dispatch({ type: SET_OPENED_REGISTER_FORM_DATA }),
});

export default connect(null, mapDispatchToProps)(Header);
