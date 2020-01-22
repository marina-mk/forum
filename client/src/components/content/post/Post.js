import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import PostInfo from './PostInfo';

const Post = ({
  author, created, postIndex, displayedIndex, message,
}) => (
  <>
    <UserInfo author={author} />
    <PostInfo created={created} postIndex={postIndex} displayedIndex={displayedIndex} message={message} />
  </>
);

Post.propTypes = {
  postIndex: PropTypes.number.isRequired,
  displayedIndex: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    topicsCount: PropTypes.number.isRequired,
    postsCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
