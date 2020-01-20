/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import SectionNavbar from './SectionNavbar';
import SectionBottomNavbar from './SectionBottomNavbar';
import TopicsTable from './TopicsTable';
import SectionInfo from './SectionInfo';
import TopicDialog from '../../modals/topic/TopicDialog';

const Section = ({
  match: { params: { section } },
  fetchCurrentSection,
  dropCurrentTopic,
  fetchTopics,
  dropTopics,
}) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    dropCurrentTopic();
    fetchCurrentSection(section);
    fetchTopics(section, setLoaded);
    return dropTopics;
  }, []);

  return (
    <>
      <SectionNavbar />
      <TopicsTable section={section} />
      <SectionInfo isLoaded={isLoaded} />
      <SectionBottomNavbar isLoaded={isLoaded} />
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
  fetchTopics: PropTypes.func.isRequired,
  dropTopics: PropTypes.func.isRequired,
};

export default connect(null, actions)(Section);
