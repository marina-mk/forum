import React, { useEffect } from "react";
import PropTypes from "prop-types";

const AuthDialog = ({
  modalLabelId, modalTitle, completeButtonLabel, isOpened, children,
  // eslint-disable-next-line no-shadow
  handleSubmit, submitAuthData, action, closeForm,
}) => {
  useEffect(() => {
    if (isOpened) {
      const modalBackdrop = document.createElement("div");
      modalBackdrop.setAttribute("class", "modal-backdrop fade show");
      document.body.appendChild(modalBackdrop);
    } else {
      document.body.removeChild(document.body.lastChild);
    }
  }, [isOpened]);

  return (
    <div
      className={`modal fade ${isOpened ? "show" : ""}`}
      style={{ display: `${isOpened ? "block" : "none"}` }}
      aria-labelledby={modalLabelId}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-base-color">
          <div className="modal-header bg-dark text-muted">
            <h5 className="modal-title" id={modalLabelId}>{modalTitle}</h5>
            <button type="button" className="close" aria-label="Close" onClick={closeForm}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit((values) => submitAuthData(values, action))} autoComplete="off" noValidate>
              {children}
              <div>
                <button type="button" className="btn btn-secondary" onClick={closeForm}>Закрыть</button>
                <button type="submit" className="btn btn-secondary">{completeButtonLabel}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthDialog.defaultProps = {
  isOpened: false,
};

AuthDialog.propTypes = {
  modalLabelId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  completeButtonLabel: PropTypes.string.isRequired,
  isOpened: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitAuthData: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default AuthDialog;
