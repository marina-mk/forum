import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SectionInfo = ({ currentSection, topics, isLoaded }) => {
  let info;

  if (currentSection) {
    info = currentSection.error || (isLoaded && !topics.length && 'Нет тем');
  }

  if (info) {
    return (
      <p className="topics-table-info">
        {`${info}. Вернуться на `}
        <Link to="/">Главную страницу</Link>
      </p>
    );
  }

  return (<></>);
};

SectionInfo.defaultProps = {
  currentSection: null,
};

SectionInfo.propTypes = {
  currentSection: PropTypes.shape({
    error: PropTypes.string,
  }),
  topics: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    created: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  })).isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ currentSection, topics }) => ({ currentSection, topics });

export default connect(mapStateToProps)(SectionInfo);
