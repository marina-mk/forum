// eslint-disable-next-line no-useless-escape
const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const MIN_PASSWORD_LENGTH = 6;

export default (values, { fields }) => {
  const errors = {};

  if (!EMAIL_REGEXP.test(values.email)) {
    errors.email = "Введите корректный email";
  }

  if (values.password && values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = "Пароль должен содержать как минимум 6 символов";
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Пароль и подтверждение пароля не совпадают";
  }

  fields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "Обязательное поле";
    }
  });

  return errors;
};
