/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import avatarImage from '../../../images/img_avatar.png';
import { formatPostPublishedInfo, formatPostNumInfo } from '../../utils/helpers/formatters';

const renderPosts = (posts) => posts.map(({
  _id, index, body, created, author,
}) => {
  const publishedInfoStr = formatPostPublishedInfo(created);
  const numInfoStr = formatPostNumInfo(index);

  return (
    <tr key={_id}>
      <td className="row">
        <div className="avatar card col-sm-2">
          <img src={avatarImage} className="card-img" style={{ width: '60px' }} alt="Default avatar" />
          <div className="card-body">
            <p className="card-text">{author[0].name}</p>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="postInfo">
            <div>{publishedInfoStr}</div>
            <div>{numInfoStr}</div>
          </div>
          <div className="postBody">{body}</div>
        </div>
      </td>
    </tr>
  );
});

const PostsTable = ({
  section, topic, posts, fetchPosts,
}) => {
  useEffect(() => { fetchPosts(section, topic); }, []);

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
    body: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    author: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  })).isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, actions)(PostsTable);
