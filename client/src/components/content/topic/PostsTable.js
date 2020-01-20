import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../post/Post';

const renderPosts = (posts) => posts.map(({
  _id, index, message, created, author,
}) => (
  <tr key={_id}>
    <td className="row">
      <Post author={author} created={created} index={index} message={message} />
    </td>
  </tr>
));

const PostsTable = ({ posts }) => (
  <div className="table-responsive">
    <table id="posts_table" className="posts table table-hover table-dark text-light font-size-small">
      <tbody>
        {renderPosts(posts)}
      </tbody>
    </table>
  </div>
);

PostsTable.propTypes = {
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

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(PostsTable);
