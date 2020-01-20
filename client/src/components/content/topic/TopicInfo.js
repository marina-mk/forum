import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TopicInfo = ({ currentTopic, posts, isLoaded }) => {
  let info;

  if (currentTopic) {
    info = currentTopic.error || (isLoaded && !posts.length && 'Нет сообщений');
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

TopicInfo.defaultProps = {
  currentTopic: null,
};

TopicInfo.propTypes = {
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
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ currentTopic, posts }) => ({ currentTopic, posts });

export default connect(mapStateToProps)(TopicInfo);
