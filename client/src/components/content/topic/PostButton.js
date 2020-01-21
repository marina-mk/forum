import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/modals/post';

const PostButton = ({ setIsOpenedPostForm, currentTopic }) => {
  if (currentTopic && !currentTopic.error) {
    return (
      <button type="button" className="post-button btn" onClick={setIsOpenedPostForm}>Ответить</button>
    );
  }

  return (<></>);
};

PostButton.defaultProps = {
  currentTopic: null,
};

PostButton.propTypes = {
  setIsOpenedPostForm: PropTypes.func.isRequired,
  currentTopic: PropTypes.shape({
    error: PropTypes.string,
  }),
};

const mapStateToProps = ({ currentTopic }) => ({ currentTopic });

export default connect(mapStateToProps, actions)(PostButton);
