const MAX_MESSAGE_LENGTH = 200;

export default (values) => {
  const errors = {};

  if (!values.message) {
    errors.message = 'Обязательное поле';
  } else if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.title = 'Название темы слишком длинное';
  }

  return errors;
};
