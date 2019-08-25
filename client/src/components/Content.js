import React from "react";
import ModalDialog from "./modals/ModalDialog";
import { EmailInput, PasswordInput, UsernameInput } from "./modals/ModalInput";

const Content = () => {
  return (
    <div className="container" style={{ height: "1200px" }}>
      <ModalDialog
        modalId="loginModal"
        modalLabelId="loginModalLabel"
        modalTitle="Вход"
        completeButtonLabel="Войти">
        <EmailInput />
        <PasswordInput />
      </ModalDialog>

      <ModalDialog
        modalId="registrationModal"
        modalLabelId="registrationModalLabel"
        modalTitle="Регистрация"
        completeButtonLabel="Зарегистрироваться"
        action="/api/register">
        <UsernameInput />
        <EmailInput />
        <PasswordInput />
      </ModalDialog>
    </div>
  );
};

export default Content;
