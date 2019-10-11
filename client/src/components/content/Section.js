/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import Breadcrumbs from './Breadcrumbs';

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

const Section = ({ match, topics, fetchTopics }) => {
  useEffect(() => { fetchTopics(match.params.section); }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark-nav-color">
        <Breadcrumbs params={match.params} />
      </nav>
      <div className="table-responsive">
        <table className="topics table table-hover table-dark text-light font-size-small">
          <tbody>
            {renderTopics(match.params.section, topics)}
          </tbody>
        </table>
      </div>
    </>
  );
};

Section.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape().isRequired,
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
  fetchTopics: PropTypes.func.isRequired,
};

const mapStateToProps = ({ topics }) => ({ topics });

export default connect(mapStateToProps, actions)(Section);
