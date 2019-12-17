import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/modals/post';

const PostButton = ({ setIsOpenedPostForm }) => (
  <button type="button" className="topic-button btn" onClick={setIsOpenedPostForm}>Ответить</button>
);

PostButton.propTypes = {
  setIsOpenedPostForm: PropTypes.func.isRequired,
};

export default connect(null, actions)(PostButton);
