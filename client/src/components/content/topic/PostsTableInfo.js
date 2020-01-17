import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PostsTableInfo = ({ currentTopic }) => {
  if (currentTopic && currentTopic.error) {
    return (
      <p className="posts-table-info">
        {`${currentTopic.error}. Вернуться на `}
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
};

const mapStateToProps = ({ currentTopic }) => ({ currentTopic });

export default connect(mapStateToProps)(PostsTableInfo);
