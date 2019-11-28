/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { InputField, TextareaField } from '../DialogField';
import validate from './validate';
import * as types from '../../../actions/types';
import { fetchTopics } from '../../../actions';
import BackdropFadePortal from '../BackdropFadePortal';

const handleOnPortalClick = (event, onClick) => {
  if (event.target.className === 'modal fade show') {
    onClick();
  }
};

const TopicDialog = ({
  params, isOpened, error, handleSubmit,
  submitData, closeForm,
}) => (
  <div
    className={`modal fade ${isOpened ? 'show' : ''}`}
    style={{ display: `${isOpened ? 'block' : 'none'}` }}
    aria-labelledby="topic_modal_label"
    onClick={(event) => { handleOnPortalClick(event, closeForm); }}
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content bg-base-color">
        <div className="modal-header bg-dark text-muted">
          <h5 className="modal-title" id="topic_modal_label">Новая тема</h5>
          <button type="button" className="close" aria-label="Close" onClick={closeForm}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit((values) => { submitData(values, params.section); })} noValidate>
            <Field component={InputField} name="title" type="text" placeholder="Название темы" />
            <Field component={TextareaField} name="description" rows="5" placeholder="Краткое описание темы" />
            <div className="mb-4">
              <small className="form-text text-light">{error}</small>
            </div>
            <div>
              <button type="submit" className="btn btn-secondary">Создать</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <BackdropFadePortal isOpened={isOpened} />
  </div>
);

TopicDialog.defaultProps = {
  isOpened: false,
  error: null,
};

TopicDialog.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string.isRequired,
  }).isRequired,
  isOpened: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitData: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};

const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
};


const submitData = (values, section) => async (dispatch) => {
  axios.post(`/api/topics/${section}`, values).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
      fetchTopics(section)(dispatch); // call subsequent action to fetch topics (method GET)
    }
  }).catch((error) => {
    dispatch({ type: types.SET_ERROR_TOPIC_FORM_DATA, payload: error.response.data });
  });
};

const mapStateToProps = ({ form }) => ({
  isOpened: form.topicForm ? form.topicForm.isOpened : false,
});

const mapDispatchToProps = { submitData, closeForm };

export default reduxForm({ validate, form: 'topicForm' })(connect(mapStateToProps, mapDispatchToProps)(TopicDialog));
