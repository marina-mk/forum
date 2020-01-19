/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import SectionNavbar from './SectionNavbar';
import SectionBottomNavbar from './SectionBottomNavbar';
import TopicsTable from './TopicsTable';
import TopicDialog from '../../modals/topic/TopicDialog';

const Section = ({ match: { params: { section } }, fetchCurrentSection, dropCurrentTopic }) => {
  useEffect(() => {
    dropCurrentTopic();
    fetchCurrentSection(section);
  }, []);

  return (
    <>
      <SectionNavbar />
      <TopicsTable section={section} />
      <SectionBottomNavbar />
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
