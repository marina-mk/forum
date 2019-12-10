/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import Breadcrumbs from '../common/Breadcrumbs';
import PostsTable from './PostsTable';

const Topic = ({ match: { params: { section, topic } }, fetchSections, fetchTopics }) => {
  const topicIndex = +topic.slice(6) - 1; // Cut topic index from stringId of the form "topic-1"

  useEffect(() => { fetchSections(); }, []);
  useEffect(() => { fetchTopics(section); }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark-nav-color">
        <Breadcrumbs sectionName={section} topicIndex={topicIndex} />
      </nav>
      <PostsTable section={section} topic={topic} />
    </>
  );
};

Topic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fetchSections: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
};

export default connect(null, actions)(Topic);
