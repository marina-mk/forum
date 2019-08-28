import React from "react";
import { LoginDialog, RegisterDialog } from "./modals/AuthDialog";
import { EmailInput, PasswordInput, UsernameInput } from "./modals/AuthInput";

const Content = () => {
  return (
    <div className="container" style={{ height: "1200px" }}>
      <LoginDialog
        modalId="loginModal"
        modalLabelId="loginModalLabel"
        modalTitle="Вход"
        completeButtonLabel="Войти"
        action="/api/login">
        <EmailInput />
        <PasswordInput />
      </LoginDialog>

      <RegisterDialog
        modalId="registrationModal"
        modalLabelId="registrationModalLabel"
        modalTitle="Регистрация"
        completeButtonLabel="Зарегистрироваться"
        action="/api/register">
        <UsernameInput />
        <EmailInput />
        <PasswordInput />
      </RegisterDialog>
    </div>
  );
};

export default Content;
