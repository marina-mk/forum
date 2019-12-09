import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({
  sectionName, topicIndex, sections, topics,
}) => {
  const currentSection = sections.find((section) => section.name === sectionName);
  const currentTopic = topics.find((topic) => topic.index === topicIndex);

  return (
    <div className="breadcrumbs">
      {currentSection && <Link to={`/${currentSection.name}`}>{currentSection.title}</Link>}
      {currentSection && currentTopic && <Link to={`/${currentSection.name}/${currentTopic.index}`}>{currentTopic.title}</Link>}
    </div>
  );
};

Breadcrumbs.defaultProps = {
  sectionName: null,
  topicIndex: -1,
};

Breadcrumbs.propTypes = {
  sectionName: PropTypes.string,
  topicIndex: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ sections, topics }) => ({ sections, topics });

export default connect(mapStateToProps)(Breadcrumbs);
