/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import TopicsTableInfo from './TopicsTableInfo';
import { formatPostsCount, formatTopicInfo, formatTopicViews } from '../../../utils/helpers/formatters';

const renderTopics = (section, topics) => topics.map(({
  _id, index, title, description, created, author, postsCount, views,
}) => {
  const topicInfoStr = formatTopicInfo(created, author);
  const postsCountStr = formatPostsCount(postsCount);
  const topicViewsStr = formatTopicViews(views);

  return (
    <tr key={_id}>
      <td>
        <div className="info">
          <Link to={`/${section}/topic-${index + 1}`} className="title">{title}</Link>
          <div className="description">{description}</div>
          <div className="topicInfo">{topicInfoStr}</div>
        </div>
        <div className="counts">
          <div>
            <span>{postsCountStr}</span>
            <span>&nbsp;</span>
          </div>
          <div>{topicViewsStr}</div>
        </div>
      </td>
    </tr>
  );
});

const TopicsTable = ({
  section, topics, fetchTopics, dropTopics,
}) => {
  useEffect(() => {
    fetchTopics(section);
    return dropTopics;
  }, []);

  return (
    <div className="table-responsive">
      <table className="topics table table-hover table-dark text-light font-size-small">
        <tbody>
          {renderTopics(section, topics)}
        </tbody>
      </table>
      <TopicsTableInfo />
    </div>
  );
};

TopicsTable.propTypes = {
  section: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    created: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  })).isRequired,
  fetchTopics: PropTypes.func.isRequired,
  dropTopics: PropTypes.func.isRequired,
};

const mapStateToProps = ({ topics }) => ({ topics });

export default connect(mapStateToProps, actions)(TopicsTable);
