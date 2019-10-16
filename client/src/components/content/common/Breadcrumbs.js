/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions';

const Breadcrumbs = ({
  params, sections, topics, fetchSections, fetchTopics,
}) => {
  useEffect(() => {
    if (!sections.length) {
      fetchSections();
    }

    if (!topics.length) {
      fetchTopics(params.section);
    }
  }, []);

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
  fetchSections: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sections, topics }) => ({ sections, topics });

export default connect(mapStateToProps, actions)(Breadcrumbs);
