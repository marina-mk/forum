import React from "react";
import { Field } from 'redux-form';

export const EmailInput = () => (
  <Field
    component="input"
    name="email"
    type="email"
    className="form-control my-3"
    placeholder="Email-адрес"
  />
);

export const PasswordInput = () => (
  <Field
    component="input"
    name="password"
    type="password"
    className="form-control my-3"
    placeholder="Пароль"
    autoComplete="off"
  />
);

export const UsernameInput = () => (
  <Field
    component="input"
    name="name"
    type="text"
    className="form-control my-3"
    placeholder="Имя пользователя"
  />
);
