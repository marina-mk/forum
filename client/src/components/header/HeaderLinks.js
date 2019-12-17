/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { setIsOpenedLoginForm } from '../../actions/modals/login';
import { setIsOpenedRegisterForm } from '../../actions/modals/register';

const HeaderLinks = ({
  user, logout, setIsOpenedLogin, setIsOpenedRegister,
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
      <a className="nav-link" onClick={setIsOpenedLogin}>Вход</a>
    </li>,
    <li className="nav-item" key="register">
      <a className="nav-link" onClick={setIsOpenedRegister}>Регистрация</a>
    </li>,
  ];
};

HeaderLinks.propTypes = {
  logout: PropTypes.func.isRequired,
  setIsOpenedLogin: PropTypes.func.isRequired,
  setIsOpenedRegister: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = {
  logout: logoutUser,
  setIsOpenedLogin: setIsOpenedLoginForm,
  setIsOpenedRegister: setIsOpenedRegisterForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
