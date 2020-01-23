import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const DeleteButton = ({
  currentSection, topicIndex, deleteTopic,
}) => {
  const [isSending, setSending] = useState(false);

  const handleOnclick = () => {
    if (isSending) return;

    const sectionId = currentSection.name;
    const topicId = `topic-${topicIndex + 1}`;

    setSending(true);
    deleteTopic(sectionId, topicId);
    setSending(false);
  };

  return (
    <button type="button" className="delete-button btn" onClick={handleOnclick}>Удалить</button>
  );
};

DeleteButton.defaultProps = {
  currentSection: null,
};

DeleteButton.propTypes = {
  currentSection: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  topicIndex: PropTypes.number.isRequired,
  deleteTopic: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentSection }) => ({ currentSection });

export default connect(mapStateToProps, actions)(DeleteButton);
