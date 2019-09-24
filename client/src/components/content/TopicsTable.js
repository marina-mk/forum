/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderTopics = (section, topics) => topics.map(({
  _id, index, title, description, created, author,
}) => {
  const createdFormated = new Date(created).toLocaleString('ru', { dateStyle: "short", timeStyle: "short" });
  const topicInfo = `Автор: ${author[0].name}, ${createdFormated}`;

  return (
    <tr key={_id}>
      <td className="info">
        <a href={`/${section}/${index}`} className="title">{title}</a>
        <div className="description">{description}</div>
        <div className="topicInfo">{topicInfo}</div>
      </td>
      <td className="counts">
        <div>0 ответов</div>
        <div>0 просмотров</div>
      </td>
    </tr>
  );
});

const TopicsTable = ({ fetchTopics, topics, match: { params: { section } } }) => {
  useEffect(() => { fetchTopics(section); }, []);

  return (
    <div className="table-responsive">
      <table className="topics table table-hover table-dark text-light font-size-small">
        <tbody>
          {renderTopics(section, topics)}
        </tbody>
      </table>
    </div>
  );
};

TopicsTable.propTypes = {
  fetchTopics: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    author: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ topics }) => ({ topics });

export default connect(mapStateToProps, actions)(TopicsTable);
