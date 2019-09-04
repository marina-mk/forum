/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const BackdropFadePortal = ({ isOpened }) => {
  const modalBackdropEl = document.createElement("div");
  modalBackdropEl.className = "modal-backdrop fade show";

  useEffect(() => {
    if (isOpened) {
      document.body.appendChild(modalBackdropEl);
    } else {
      document.body.removeChild(document.body.lastChild);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return createPortal(modalBackdropEl.current, document.body);
};

const AuthDialog = ({
  modalLabelId, modalTitle, completeButtonLabel, isOpened, children,
  handleSubmit, submitAuthData, action, closeForm,
}) => {
  const handleOnPortalClick = (e) => {
    if (e.target.className === "modal fade show") {
      closeForm();
    }
  };

  return (
    <div
      className={`modal fade ${isOpened ? "show" : ""}`}
      style={{ display: `${isOpened ? "block" : "none"}` }}
      aria-labelledby={modalLabelId}
      onClick={handleOnPortalClick}
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
      <BackdropFadePortal isOpened={isOpened} />
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
