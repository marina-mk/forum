import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/modals/topic';

const TopicButton = ({ setIsOpenedTopicForm }) => (
  <button type="button" className="topic-button btn" onClick={setIsOpenedTopicForm}>Новая тема</button>
);

TopicButton.propTypes = {
  setIsOpenedTopicForm: PropTypes.func.isRequired,
};

export default connect(null, actions)(TopicButton);
