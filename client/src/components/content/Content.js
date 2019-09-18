import React from 'react';
import LoginDialog from '../modals/auth/login/Dialog';
import RegisterDialog from '../modals/auth/register/Dialog';
import loginFields from '../modals/auth/login/fields';
import registerFields from '../modals/auth/register/fields';
import SectionsTable from './SectionsTable';

const Content = () => (
  <div className="container px-0 min-vh-100">
    <LoginDialog
      modalId="login_modal"
      modalTitle="Вход"
      completeButtonLabel="Войти"
      action="/api/login"
      fields={loginFields}
    />
    <RegisterDialog
      modalId="registration_modal"
      modalTitle="Регистрация"
      completeButtonLabel="Зарегистрироваться"
      action="/api/register"
      fields={registerFields}
    />
    <SectionsTable />
  </div>
);

export default Content;
