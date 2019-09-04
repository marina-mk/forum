/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

const AuthField = ({ input, meta, ...rest }) => (
  <div className="form-group">
    <input {...input} {...rest} className="form-control" />
    <div>{meta.touched && meta.error}</div>
  </div>
);

AuthField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default AuthField;
