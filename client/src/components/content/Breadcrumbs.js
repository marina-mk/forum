import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ params }) => (
  <nav className="breadcrumbs navbar navbar-dark bg-dark-nav-color">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">Section</a>
      <a className="nav-item nav-link" href="#">Topic</a>
    </div>
  </nav>
);

Breadcrumbs.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string.isRequired,
    topic: PropTypes.string,
  }).isRequired,
};

export default Breadcrumbs;
