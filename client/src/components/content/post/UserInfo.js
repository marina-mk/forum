import React from 'react';
import PropTypes from 'prop-types';
import avatarImage from '../../../images/img_avatar.png';

const UserInfo = ({ author }) => (
  <div className="avatar card col-sm-2">
    <img src={avatarImage} className="card-img" style={{ width: '60px' }} alt="Default avatar" />
    <div className="card-body">
      <p className="card-text">{author.name}</p>
      <p className="card-text">0 тем, 10000&nbsp;сообщений</p>
    </div>
  </div>
);

UserInfo.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfo;
