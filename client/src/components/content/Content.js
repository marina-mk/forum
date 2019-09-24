import React from 'react';
import { Route } from 'react-router-dom';
import LoginDialog from '../modals/auth/login/Dialog';
import RegisterDialog from '../modals/auth/register/Dialog';
import loginFields from '../modals/auth/login/fields';
import registerFields from '../modals/auth/register/fields';
import SectionsTable from './SectionsTable';
import TopicsTable from './TopicsTable';

const Content = () => (
  <div id="content_container" className="container px-0">
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
    <Route exact path="/" component={SectionsTable} />
    <Route exact path="/:section" component={TopicsTable} />
  </div>
);

export default Content;
