import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TopicsTableInfo = ({ currentSection }) => {
  if (currentSection && currentSection.error) {
    return (
      <p className="topics-table-info">
        {`${currentSection.error}. Вернуться на `}
        <Link to="/">Главную страницу</Link>
      </p>
    );
  }

  return (<></>);
};

TopicsTableInfo.defaultProps = {
  currentSection: null,
};

TopicsTableInfo.propTypes = {
  currentSection: PropTypes.shape({
    error: PropTypes.string,
  }),
};

const mapStateToProps = ({ currentSection }) => ({ currentSection });

export default connect(mapStateToProps)(TopicsTableInfo);
