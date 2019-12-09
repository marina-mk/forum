/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import Breadcrumbs from '../common/Breadcrumbs';
import TopicButton from './TopicButton';
import TopicsTable from './TopicsTable';
import TopicDialog from '../../modals/topic/TopicDialog';
import requireAuth from '../../utils/requireAuth';

const TopicButtonRequireAuth = requireAuth(TopicButton);

const Section = ({ match, fetchSections, fetchTopics }) => {
  useEffect(() => { fetchSections(); }, []);
  useEffect(() => { fetchTopics(match.params.section); }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark-nav-color">
        <Breadcrumbs params={match.params} />
        <TopicButtonRequireAuth />
      </nav>
      <TopicsTable params={match.params} />
      <TopicDialog params={match.params} />
    </>
  );
};

Section.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fetchSections: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
};

export default connect(null, actions)(Section);
