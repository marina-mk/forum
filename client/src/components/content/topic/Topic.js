/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import TopicNavbar from './TopicNavbar';
import TopicBottomNavbar from './TopicBottomNavbar';
import PostsTable from './PostsTable';
import TopicInfo from './TopicInfo';
import PostDialog from '../../modals/post/PostDialog';
import { updateTopicViews } from '../../../utils/actions/supplementaryRequests';

const Topic = ({
  match: { params: { section, topic } },
  fetchCurrentSection,
  fetchCurrentTopic,
  fetchPosts,
  dropPosts,
}) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchCurrentSection(section);
    fetchCurrentTopic(section, topic);
    fetchPosts(section, topic, setLoaded);
    updateTopicViews(section, topic);
    return dropPosts;
  }, []);

  return (
    <>
      <TopicNavbar />
      <PostsTable />
      <TopicInfo isLoaded={isLoaded} />
      <TopicBottomNavbar isLoaded={isLoaded} />
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
  fetchPosts: PropTypes.func.isRequired,
  dropPosts: PropTypes.func.isRequired,
};

export default connect(null, actions)(Topic);
