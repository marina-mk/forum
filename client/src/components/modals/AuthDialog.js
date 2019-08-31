import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { submitAuthData } from "../../actions";

const AuthDialog = ({
  modalLabelId, modalTitle, completeButtonLabel, isOpened, children,
  // eslint-disable-next-line no-shadow
  handleSubmit, submitAuthData, action,
}) => {
  useEffect(() => {
    if (isOpened) {
      const modalBackdrop = document.createElement("div");
      modalBackdrop.setAttribute("class", "modal-backdrop fade show");
      document.body.appendChild(modalBackdrop);
    } else {
      document.body.removeChild(document.body.lastChild);
    }
  });

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
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit((values) => submitAuthData(values, action))} autoComplete="off" noValidate>
              {children}
              <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
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
};

const loginMapStateToProps = ({ form }) => ({
  isOpened: form.loginForm ? form.loginForm.isOpened : false,
});

const registerMapStateToProps = ({ form }) => ({
  isOpened: form.loginForm ? form.registerForm.isOpened : false,
});

export const LoginDialog = reduxForm({ form: "loginForm" })(
  connect(loginMapStateToProps, { submitAuthData })(AuthDialog),
);

export const RegisterDialog = reduxForm({ form: "registerForm" })(
  connect(registerMapStateToProps, { submitAuthData })(AuthDialog),
);
