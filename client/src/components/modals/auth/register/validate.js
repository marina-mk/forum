// eslint-disable-next-line no-useless-escape
const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const MIN_PASSWORD_LENGTH = 6;

export default (values) => {
  const errors = {};

  if (!EMAIL_REGEXP.test(values.email)) {
    errors.email = 'Введите корректный email';
  }

  if (values.password && values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = 'Пароль должен содержать как минимум 6 символов';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Пароль и подтверждение пароля не совпадают';
  }

  if (!values.name) {
    errors.name = 'Обязательное поле';
  }

  if (!values.email) {
    errors.email = 'Обязательное поле';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Обязательное поле';
  }

  return errors;
};
