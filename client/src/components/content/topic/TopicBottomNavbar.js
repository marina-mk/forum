/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostButton from './PostButton';
import requireAuth from '../../utils/requireAuth';

const PostButtonRequireAuth = requireAuth(PostButton);

const TopicBottomNavbar = ({ posts }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const footerEl = document.getElementById('footer');
    const footerRect = footerEl.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const isFooterHidden = footerRect.bottom < 0 || footerRect.top - viewHeight >= 0;
    const isTopicBottomNavbarVisible = posts.length && isFooterHidden;
    setVisible(isTopicBottomNavbarVisible);
  });

  if (isVisible) {
    return (
      <nav className="navbar navbar-dark bg-dark-nav-color bottom">
        <PostButtonRequireAuth />
      </nav>
    );
  }

  return (<></>);
};

TopicBottomNavbar.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(TopicBottomNavbar);
