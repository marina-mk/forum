/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import * as mapDispatchToProps from '../../../actions/modals/post';
import BackdropFadePortal from '../BackdropFadePortal';
import RichTextEditor from './RichTextEditor';

const handleOnPortalClick = (event, onClick) => {
  if (event.target.className === 'modal fade show') {
    onClick();
  }
};

const PostDialog = ({
  section, topic, isOpened, closeForm, error, richTextEditorState, submitData,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = draftToHtml(convertToRaw(richTextEditorState.getCurrentContent()));
    submitData(data, section, topic);
  };

  return (
    <div
      className={`modal fade ${isOpened ? 'show' : ''}`}
      style={{ display: `${isOpened ? 'block' : 'none'}` }}
      aria-labelledby="topic_modal_label"
      onClick={(event) => { handleOnPortalClick(event, closeForm); }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-base-color">
          <div className="modal-header bg-dark text-muted">
            <h5 className="modal-title" id="topic_modal_label">Новое сообщение</h5>
            <button type="button" className="close" aria-label="Close" onClick={closeForm}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} noValidate>
              <RichTextEditor />
              <div className="mb-4">
                <small className="form-text text-light">{error}</small>
              </div>
              <div>
                <button type="submit" className="btn btn-secondary">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BackdropFadePortal isOpened={isOpened} />
    </div>
  );
};

PostDialog.defaultProps = {
  isOpened: false,
  error: null,
  richTextEditorState: null,
};

PostDialog.propTypes = {
  section: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  isOpened: PropTypes.bool,
  closeForm: PropTypes.func.isRequired,
  error: PropTypes.string,
  richTextEditorState: PropTypes.shape({
    getCurrentContent: PropTypes.func.isRequired,
  }),
  submitData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ form }) => ({
  isOpened: form.postForm ? form.postForm.isOpened : false,
  error: form.postForm ? form.postForm.error : null,
  richTextEditorState: form.postForm ? form.postForm.editorState : null,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDialog);
