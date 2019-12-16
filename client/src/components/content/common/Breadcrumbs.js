import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ currentSection, currentTopic }) => (
  <div className="breadcrumbs">
    <Link to="/">Главная</Link>
    {currentSection && <Link to={`/${currentSection.name}`}>{currentSection.title}</Link>}
    {currentSection && currentTopic
      && <Link to={`/${currentSection.name}/topic-${currentTopic.index + 1}`}>{currentTopic.title}</Link>}
  </div>
);

Breadcrumbs.defaultProps = {
  currentSection: null,
  currentTopic: null,
};

Breadcrumbs.propTypes = {
  currentSection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  currentTopic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = ({ currentSection, currentTopic }) => ({ currentSection, currentTopic });

export default connect(mapStateToProps)(Breadcrumbs);
