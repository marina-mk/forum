/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as types from '../../../actions/types';
import BackdropFadePortal from '../BackdropFadePortal';

const handleOnPortalClick = (event, onClick) => {
  if (event.target.className === 'modal fade show') {
    onClick();
  }
};

const TopicDialog = ({ isOpened, closeForm }) => (
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
          <form noValidate>
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
};

TopicDialog.propTypes = {
  isOpened: PropTypes.bool,
  closeForm: PropTypes.func.isRequired,
};

const closeForm = () => (dispatch) => {
  dispatch({ type: types.SET_CLOSED_TOPIC_FORM_DATA });
};

const mapStateToProps = ({ form }) => ({
  isOpened: form.topicForm ? form.topicForm.isOpened : false,
});

const mapDispatchToProps = { closeForm };

export default connect(mapStateToProps, mapDispatchToProps)(TopicDialog);
