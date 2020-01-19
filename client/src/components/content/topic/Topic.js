/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import TopicNavbar from './TopicNavbar';
import TopicBottomNavbar from './TopicBottomNavbar';
import PostsTable from './PostsTable';
import PostDialog from '../../modals/post/PostDialog';

const Topic = ({
  match: { params: { section, topic } },
  fetchCurrentSection,
  fetchCurrentTopic,
}) => {
  useEffect(() => { fetchCurrentSection(section); }, []);
  useEffect(() => { fetchCurrentTopic(section, topic); }, []);

  return (
    <>
      <TopicNavbar />
      <PostsTable section={section} topic={topic} />
      <TopicBottomNavbar />
      <PostDialog section={section} topic={topic} />
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
  fetchCurrentSection: PropTypes.func.isRequired,
  fetchCurrentTopic: PropTypes.func.isRequired,
};

export default connect(null, actions)(Topic);
