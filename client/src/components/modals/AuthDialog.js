import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitAuthData } from '../../actions';

class AuthDialog extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.submitAuthData(values, this.props.action, this.props.history);
  }

  render() {
    return (
      <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby={this.props.modalLabelId} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-base-color">
            <div className="modal-header bg-dark text-muted">
              <h5 className="modal-title" id={this.props.modalLabelId}>{this.props.modalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.props.handleSubmit(this.handleSubmit)} autoComplete="off" noValidate={true}>
                {this.props.children}
                <div>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                  <button type="submit" className="btn btn-secondary">{this.props.completeButtonLabel}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const LoginDialog = reduxForm({ form: "loginForm" })(
  connect(null, { submitAuthData })(withRouter(AuthDialog))
);

export const RegisterDialog = reduxForm({ form: "registerForm" })(
  connect(null, { submitAuthData })(withRouter(AuthDialog))
);
