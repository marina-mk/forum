/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import SectionsTable from './SectionsTable';

const Forum = ({ dropCurrentSection, dropCurrentTopic }) => {
  useEffect(() => {
    dropCurrentSection();
    dropCurrentTopic();
  }, []);

  return (
    <SectionsTable />
  );
};

Forum.propTypes = {
  dropCurrentSection: PropTypes.func.isRequired,
  dropCurrentTopic: PropTypes.func.isRequired,
};

export default connect(null, actions)(Forum);
