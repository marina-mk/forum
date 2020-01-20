import React from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import PostButton from './PostButton';
import requireAuth from '../../utils/requireAuth';

const PostButtonRequireAuth = requireAuth(PostButton);

const TopicNavbar = () => (
  <nav id="topic_navbar" className="topic navbar navbar-dark bg-dark-nav-color">
    <Breadcrumbs />
    <PostButtonRequireAuth />
  </nav>
);

export default TopicNavbar;
