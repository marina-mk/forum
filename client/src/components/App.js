/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

const App = ({ fetchUser }) => {
  useEffect(() => { (fetchUser)(); }, []);

  return (
    <BrowserRouter>
      <div className="container bg-base-color p-0">
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
