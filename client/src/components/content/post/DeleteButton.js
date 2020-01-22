import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const DeleteButton = ({
  currentSection, currentTopic, postIndex, deletePost,
}) => {
  const [isSending, setSending] = useState(false);

  const handleOnclick = () => {
    if (isSending) return;

    const sectionId = currentSection.name;
    const topicId = `topic-${currentTopic.index + 1}`;
    const postId = `post-${postIndex + 1}`;

    setSending(true);
    deletePost(sectionId, topicId, postId);
    setSending(false);
  };

  return (
    <button type="button" className="delete-button btn" onClick={handleOnclick}>Удалить</button>
  );
};

DeleteButton.defaultProps = {
  currentSection: null,
  currentTopic: null,
};

DeleteButton.propTypes = {
  currentSection: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  currentTopic: PropTypes.shape({
    index: PropTypes.number.isRequired,
  }),
  postIndex: PropTypes.number.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentSection, currentTopic }) => ({ currentSection, currentTopic });

export default connect(mapStateToProps, actions)(DeleteButton);
