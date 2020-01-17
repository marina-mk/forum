import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PostsTableInfo = ({ currentTopic, posts }) => {
  let info;

  if (currentTopic) {
    info = currentTopic.error || ((!Array.isArray(posts) || !posts.length) && 'Нет сообщений');
  }

  if (info) {
    return (
      <p className="posts-table-info">
        {`${info}. Вернуться на `}
        <Link to="/">Главную страницу</Link>
      </p>
    );
  }

  return (<></>);
};

PostsTableInfo.defaultProps = {
  currentTopic: null,
};

PostsTableInfo.propTypes = {
  currentTopic: PropTypes.shape({
    error: PropTypes.string,
  }),
  posts: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      topicsCount: PropTypes.number.isRequired,
      postsCount: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};

const mapStateToProps = ({ currentTopic, posts }) => ({ currentTopic, posts });

export default connect(mapStateToProps)(PostsTableInfo);
