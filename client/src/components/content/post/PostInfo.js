import React from 'react';
import PropTypes from 'prop-types';
import { formatPostPublishedInfo, formatPostNumInfo } from '../../utils/helpers/formatters';
import RichTextMessage from './RichTextMessage';

const PostInfo = ({ created, index, message }) => {
  const publishedInfoStr = formatPostPublishedInfo(created);
  const numInfoStr = formatPostNumInfo(index);

  return (
    <div className="col-sm-10">
      <div className="postInfo">
        <div>{publishedInfoStr}</div>
        <div>{numInfoStr}</div>
      </div>
      <RichTextMessage message={message} />
    </div>
  );
};

PostInfo.propTypes = {
  index: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default PostInfo;
