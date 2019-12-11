/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatResponsesCount, formatTopicInfo } from '../../utils/helpers/formatters';

const renderTopics = (section, topics) => topics.map(({
  _id, index, title, description, created, author, postsCount,
}) => {
  const topicInfoStr = formatTopicInfo(created, author);
  const responsesCountStr = formatResponsesCount(postsCount);

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
            <span>{responsesCountStr}</span>
            <span>&nbsp;</span>
          </div>
          <div>0 просмотров</div>
        </div>
      </td>
    </tr>
  );
});

const TopicsTable = ({ section, topics }) => (
  <div className="table-responsive">
    <table className="topics table table-hover table-dark text-light font-size-small">
      <tbody>
        {renderTopics(section, topics)}
      </tbody>
    </table>
  </div>
);

TopicsTable.propTypes = {
  section: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    author: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

const mapStateToProps = ({ topics }) => ({ topics });

export default connect(mapStateToProps)(TopicsTable);
