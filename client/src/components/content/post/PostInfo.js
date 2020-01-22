import React from 'react';
import PropTypes from 'prop-types';
import { formatPostPublishedInfo, formatPostNumInfo } from '../../../utils/helpers/formatters';
import RichTextMessage from './RichTextMessage';
import DeleteButton from './DeleteButton';
import requireAdmin from '../../utils/requireAdmin';

const DeleteButtonRequireAdmin = requireAdmin(DeleteButton);

const PostInfo = ({
  created, postIndex, displayedIndex, message,
}) => {
  const publishedInfoStr = formatPostPublishedInfo(created);
  const numInfoStr = formatPostNumInfo(displayedIndex);

  return (
    <div className="postBody col-sm-10">
      <div className="postInfo">
        <div>{publishedInfoStr}</div>
        <div>{numInfoStr}</div>
      </div>
      <RichTextMessage message={message} />
      <nav>
        <DeleteButtonRequireAdmin postIndex={postIndex} />
      </nav>
    </div>
  );
};

PostInfo.propTypes = {
  postIndex: PropTypes.number.isRequired,
  displayedIndex: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default PostInfo;
