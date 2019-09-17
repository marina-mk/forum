/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import AuthField from './AuthField';
import BackdropFadePortal from './BackdropFadePortal';

const handleOnPortalClick = (event, onClick) => {
  if (event.target.className === 'modal fade show') {
    onClick();
  }
};

const renderFields = (fields) => fields.map(({ name, type, placeholder }, i) => (
  <Field key={i} component={AuthField} name={name} type={type} placeholder={placeholder} />
));

const AuthDialog = ({
  fields, modalId, modalTitle, completeButtonLabel, isOpened,
  error, handleSubmit, submitAuthData, action, closeForm,
}) => (
  <div
    className={`modal fade ${isOpened ? 'show' : ''}`}
    style={{ display: `${isOpened ? 'block' : 'none'}` }}
    aria-labelledby={`${modalId}_label`}
    onClick={(event) => { handleOnPortalClick(event, closeForm); }}
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content bg-base-color">
        <div className="modal-header bg-dark text-muted">
          <h5 className="modal-title" id={`${modalId}_label`}>{modalTitle}</h5>
          <button type="button" className="close" aria-label="Close" onClick={closeForm}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit((values) => submitAuthData(values, action))} noValidate>
            {renderFields(fields)}
            <div className="mb-4">
              <small className="form-text text-light">{error}</small>
            </div>
            <div>
              <button type="submit" className="btn btn-secondary">{completeButtonLabel}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <BackdropFadePortal isOpened={isOpened} />
  </div>
);

AuthDialog.defaultProps = {
  isOpened: false,
  error: null,
};

AuthDialog.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  modalId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  completeButtonLabel: PropTypes.string.isRequired,
  isOpened: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitAuthData: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default AuthDialog;
