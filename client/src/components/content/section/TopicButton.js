import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from '../../../actions/types';

const TopicButton = ({ setIsOpenedTopicForm }) => (
  <button type="button" className="topic-button btn" onClick={setIsOpenedTopicForm}>Новая тема</button>
);

TopicButton.propTypes = {
  setIsOpenedTopicForm: PropTypes.func.isRequired,
};

const setIsOpenedTopicForm = () => (dispatch) => {
  dispatch({ type: types.SET_OPENED_TOPIC_FORM_DATA });
};

const mapDispatchToProps = { setIsOpenedTopicForm };

export default connect(null, mapDispatchToProps)(TopicButton);
