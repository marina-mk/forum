import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import requireAdmin from '../../utils/requireAdmin';
import { formatPostsCount, formatTopicInfo, formatTopicViews } from '../../../utils/helpers/formatters';

const DeleteButtonRequireAdmin = requireAdmin(DeleteButton);

const TopicEntry = ({
  section, index, title, description, created, author, postsCount, views,
}) => {
  const topicInfoStr = formatTopicInfo(created, author);
  const postsCountStr = formatPostsCount(postsCount);
  const topicViewsStr = formatTopicViews(views);

  return (
    <>
      <div className="topic_description">
        <Link to={`/${section}/topic-${index + 1}`} className="title">{title}</Link>
        <div className="description">{description}</div>
        <div className="info">{topicInfoStr}</div>
      </div>
      <div className="topic_info">
        <div className="counts">
          <div>
            <span>{postsCountStr}</span>
            <span>&nbsp;</span>
          </div>
          <div>{topicViewsStr}</div>
        </div>
        <nav>
          <DeleteButtonRequireAdmin topicIndex={index} />
        </nav>
      </div>
    </>
  );
};

TopicEntry.defaultProps = {
  description: '',
};

TopicEntry.propTypes = {
  section: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  created: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  postsCount: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};

export default TopicEntry;
