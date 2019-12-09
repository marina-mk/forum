/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ params, sections, topics }) => {
  const currentSection = sections.find((section) => section.name === params.section);
  const currentTopic = topics.find((topic) => topic.index === +params.topic);

  return (
    <div className="breadcrumbs">
      {currentSection && <Link to={`/${currentSection.name}`}>{currentSection.title}</Link>}
      {currentSection && currentTopic && <Link to={`/${currentSection.name}/${currentTopic.index}`}>{currentTopic.title}</Link>}
    </div>
  );
};

Breadcrumbs.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string.isRequired,
    topic: PropTypes.string,
  }).isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ sections, topics }) => ({ sections, topics });

export default connect(mapStateToProps)(Breadcrumbs);
