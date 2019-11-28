import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../../../actions/modals/register';
import AuthDialog from '../AuthDialog';
import validate from './validate';

const mapStateToProps = ({ form }) => ({
  isOpened: form.registerForm ? form.registerForm.isOpened : false,
});

export default reduxForm({ validate, form: 'registerForm' })(connect(mapStateToProps, mapDispatchToProps)(AuthDialog));
