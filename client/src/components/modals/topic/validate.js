const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 200;

export default (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Обязательное поле';
  } else if (values.title.length > MAX_TITLE_LENGTH) {
    errors.title = 'Название темы слишком длинное';
  }

  if (values.description && values.description.length > MAX_DESCRIPTION_LENGTH) {
    errors.description = 'Описание темы слишком длинное';
  }

  return errors;
};
