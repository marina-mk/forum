/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = ({ user }) => ({ user });

const requireAuth = (Component) => connect(mapStateToProps, null)((user, ...props) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    axios.get('/api/checkToken').then((response) => {
      const isResponseStatusOk = response.status === 200;
      setIsAuthorized(isResponseStatusOk);
    }).catch((error) => {
      setIsAuthorized(false);
      console.log(error.message, error.response.data);
    });
  }, [user]);

  return (isAuthorized ? <Component {...props} /> : null);
});

export default requireAuth;
