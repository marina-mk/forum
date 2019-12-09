/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { InputField, TextareaField } from '../DialogField';
import * as mapDispatchToProps from '../../../actions/modals/topic';
import validate from './validate';
import BackdropFadePortal from '../BackdropFadePortal';

const handleOnPortalClick = (event, onClick) => {
  if (event.target.className === 'modal fade show') {
    onClick();
  }
};

const TopicDialog = ({
  section, isOpened, error, handleSubmit,
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
          <form onSubmit={handleSubmit((values) => { submitData(values, section); })} noValidate>
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
  section: PropTypes.string.isRequired,
  isOpened: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitData: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};

const mapStateToProps = ({ form }) => ({
  isOpened: form.topicForm ? form.topicForm.isOpened : false,
});

export default reduxForm({ validate, form: 'topicForm' })(connect(mapStateToProps, mapDispatchToProps)(TopicDialog));
