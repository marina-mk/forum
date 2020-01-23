/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicEntry from './TopicEntry';
import * as actions from '../../../actions';

const renderTopics = (section, topics) => topics.map(({
  _id, index, title, description, created, author, postsCount, views,
}) => (
  <tr key={_id}>
    <td>
      <TopicEntry
        section={section}
        index={index}
        title={title}
        description={description}
        created={created}
        author={author}
        postsCount={postsCount}
        views={views}
      />
    </td>
  </tr>
));

const TopicsTable = ({ section, topics }) => (
  <div className="table-responsive">
    <table id="topics_table" className="topics table table-hover table-dark text-light font-size-small">
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
    description: PropTypes.string,
    created: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    postsCount: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ topics }) => ({ topics });

export default connect(mapStateToProps, actions)(TopicsTable);
