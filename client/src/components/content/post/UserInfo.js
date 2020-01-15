import React from 'react';
import PropTypes from 'prop-types';
import avatarImage from '../../../images/img_avatar.png';
import { formatUserCaption } from '../../../utils/helpers/formatters';

const UserInfo = ({ author }) => {
  const userCaptionStr = formatUserCaption(author.topicsCount, author.postsCount);

  return (
    <div className="avatar card col-sm-2">
      <img src={avatarImage} className="card-img" style={{ width: '60px' }} alt="Default avatar" />
      <div className="card-body">
        <p className="card-text">{author.name}</p>
        <p className="card-text">{userCaptionStr}</p>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    topicsCount: PropTypes.number.isRequired,
    postsCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserInfo;
