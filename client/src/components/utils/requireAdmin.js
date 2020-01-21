/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({ user });

const requireAdmin = (Component) => connect(mapStateToProps)(({ user, ...props }) => (user && user.role === 'admin'
  ? <Component {...props} /> : null));

export default requireAdmin;
