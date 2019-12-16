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

const Section = ({ match: { params: { section } }, fetchCurrentSection, dropCurrentTopic }) => {
  useEffect(() => {
    dropCurrentTopic();
    fetchCurrentSection(section);
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark-nav-color">
        <Breadcrumbs />
        <TopicButtonRequireAuth />
      </nav>
      <TopicsTable section={section} />
      <TopicDialog section={section} />
    </>
  );
};

Section.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fetchCurrentSection: PropTypes.func.isRequired,
  dropCurrentTopic: PropTypes.func.isRequired,
};

export default connect(null, actions)(Section);
