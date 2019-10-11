import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from './Breadcrumbs';

const Topic = ({ match }) => (
  <>
    <nav className="navbar navbar-dark bg-dark-nav-color">
      <Breadcrumbs params={match.params} />
    </nav>
  </>
);

Topic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Topic;
