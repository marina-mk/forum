import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/modals/topic';

const TopicButton = ({ setIsOpenedTopicForm, currentSection }) => {
  if (currentSection && !currentSection.error) {
    return (
      <button type="button" className="topic-button btn" onClick={setIsOpenedTopicForm}>Новая тема</button>
    );
  }

  return (<></>);
};

TopicButton.defaultProps = {
  currentSection: null,
};

TopicButton.propTypes = {
  setIsOpenedTopicForm: PropTypes.func.isRequired,
  currentSection: PropTypes.shape({
    error: PropTypes.string,
  }),
};

const mapStateToProps = ({ currentSection }) => ({ currentSection });

export default connect(mapStateToProps, actions)(TopicButton);
