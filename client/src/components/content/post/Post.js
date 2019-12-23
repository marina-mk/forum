import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import PostInfo from './PostInfo';

const Post = ({
  author, created, index, message,
}) => (
  <>
    <UserInfo author={author} />
    <PostInfo created={created} index={index} message={message} />
  </>
);

Post.propTypes = {
  index: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Post;
