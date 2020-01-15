/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import Post from '../post/Post';
import { updateTopicViews } from '../../../utils/actions/supplementaryRequests';

const renderPosts = (posts) => posts.map(({
  _id, index, message, created, author,
}) => (
  <tr key={_id}>
    <td className="row">
      <Post author={author} created={created} index={index} message={message} />
    </td>
  </tr>
));

const PostsTable = ({
  section, topic, posts, fetchPosts, dropPosts,
}) => {
  useEffect(() => {
    fetchPosts(section, topic);
    updateTopicViews(section, topic);
    return dropPosts;
  }, []);

  return (
    <div className="table-responsive">
      <table className="posts table table-hover table-dark text-light font-size-small">
        <tbody>
          {renderPosts(posts)}
        </tbody>
      </table>
    </div>
  );
};

PostsTable.propTypes = {
  section: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
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
  fetchPosts: PropTypes.func.isRequired,
  dropPosts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, actions)(PostsTable);
