import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { submitAuthData } from "../../actions";

class AuthDialog extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    // eslint-disable-next-line no-shadow
    const { submitAuthData, action, history } = this.props;
    submitAuthData(values, action, history);
  }

  render() {
    const {
      modalId, modalLabelId, modalTitle, completeButtonLabel, children, handleSubmit,
    } = this.props;

    return (
      <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby={modalLabelId} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-base-color">
            <div className="modal-header bg-dark text-muted">
              <h5 className="modal-title" id={modalLabelId}>{modalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(this.handleSubmit)} autoComplete="off" noValidate>
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
  }
}

AuthDialog.propTypes = {
  modalId: PropTypes.string.isRequired,
  modalLabelId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  completeButtonLabel: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitAuthData: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export const LoginDialog = reduxForm({ form: "loginForm" })(
  connect(null, { submitAuthData })(withRouter(AuthDialog)),
);

export const RegisterDialog = reduxForm({ form: "registerForm" })(
  connect(null, { submitAuthData })(withRouter(AuthDialog)),
);
