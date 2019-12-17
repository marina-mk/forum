/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import Breadcrumbs from '../common/Breadcrumbs';
import PostsTable from './PostsTable';
import PostButton from './PostButton';
import requireAuth from '../../utils/requireAuth';
import PostDialog from '../../modals/post/PostDialog';

const PostButtonRequireAuth = requireAuth(PostButton);

const Topic = ({
  match: { params: { section, topic } },
  fetchCurrentSection,
  fetchCurrentTopic,
}) => {
  useEffect(() => { fetchCurrentSection(section); }, []);
  useEffect(() => { fetchCurrentTopic(section, topic); }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark-nav-color">
        <Breadcrumbs />
        <PostButtonRequireAuth />
      </nav>
      <PostsTable section={section} topic={topic} />
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
