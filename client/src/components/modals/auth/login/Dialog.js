import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../../../actions/modals/login';
import AuthDialog from '../AuthDialog';
import validate from './validate';

const mapStateToProps = ({ form }) => ({
  isOpened: form.loginForm ? form.loginForm.isOpened : false,
});

export default reduxForm({ validate, form: 'loginForm' })(connect(mapStateToProps, mapDispatchToProps)(AuthDialog));
