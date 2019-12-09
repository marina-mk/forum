/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const renderTopics = (section, topics) => topics.map(({
  _id, index, title, description, created, author,
}) => {
  const createdFormated = new Date(created).toLocaleString('ru', { dateStyle: "short", timeStyle: "short" });
  const topicInfo = `Автор: ${author[0].name}, ${createdFormated}`;

  return (
    <tr key={_id}>
      <td>
        <div className="info">
          <Link to={`/${section}/${index}`} className="title">{title}</Link>
          <div className="description">{description}</div>
          <div className="topicInfo">{topicInfo}</div>
        </div>
        <div className="counts">
          <div>
            <span>0 ответов</span>
            <span>&nbsp;</span>
          </div>
          <div>0 просмотров</div>
        </div>
      </td>
    </tr>
  );
});

const TopicsTable = ({ params, topics }) => (
  <div className="table-responsive">
    <table className="topics table table-hover table-dark text-light font-size-small">
      <tbody>
        {renderTopics(params.section, topics)}
      </tbody>
    </table>
  </div>
);

TopicsTable.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string.isRequired,
  }).isRequired,
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
