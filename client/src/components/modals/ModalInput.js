import React from "react";

export const EmailInput = () => (
  <input
    name="email"
    type="email"
    className="form-control my-3"
    placeholder="Email-адрес"
    autoComplete="username"
  />
);

export const PasswordInput = () => (
  <input
    name="password"
    type="password"
    className="form-control my-3"
    placeholder="Пароль"
    autoComplete="new-password"
  />
);

export const UsernameInput = () => (
  <input
    name="username"
    type="text"
    className="form-control my-3"
    placeholder="Имя пользователя"
  />
);
