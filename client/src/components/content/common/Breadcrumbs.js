import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ currentSection, currentTopic }) => (
  <div className="breadcrumbs">
    <Link to="/">Главная</Link>
    {currentSection && currentSection.name && currentSection.title
      && <Link to={`/${currentSection.name}`}>{currentSection.title}</Link>}
    {currentSection && currentSection.name && currentTopic && currentTopic.index && currentTopic.title
      && <Link to={`/${currentSection.name}/topic-${currentTopic.index + 1}`}>{currentTopic.title}</Link>}
  </div>
);

Breadcrumbs.defaultProps = {
  currentSection: null,
  currentTopic: null,
};

Breadcrumbs.propTypes = {
  currentSection: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
  }),
  currentTopic: PropTypes.shape({
    title: PropTypes.string,
    index: PropTypes.number,
    error: PropTypes.string,
  }),
};

const mapStateToProps = ({ currentSection, currentTopic }) => ({ currentSection, currentTopic });

export default connect(mapStateToProps)(Breadcrumbs);
