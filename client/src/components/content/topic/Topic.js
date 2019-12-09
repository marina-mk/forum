/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import Breadcrumbs from '../common/Breadcrumbs';

const Topic = ({ match: { params: { section, topic } }, fetchSections, fetchTopics }) => {
  useEffect(() => { fetchSections(); }, []);
  useEffect(() => { fetchTopics(section); }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark-nav-color">
        <Breadcrumbs sectionName={section} topicIndex={+topic} />
      </nav>
    </>
  );
};

Topic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fetchSections: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
};

export default connect(null, actions)(Topic);
