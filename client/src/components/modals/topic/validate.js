const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 200;

export default (values) => {
  const errors = {};

  if (values.title && values.title.trim().length === 0) {
    errors.title = 'Название темы должно быть не пустым';
  }

  if (values.title && values.title.length > MAX_TITLE_LENGTH) {
    errors.title = 'Название темы слишком длинное';
  }

  if (!values.title) {
    errors.title = 'Обязательное поле';
  }

  if (values.description && values.description.trim().length === 0) {
    errors.description = 'Описание темы должно быть не пустым';
  }

  if (values.description && values.description.length > MAX_DESCRIPTION_LENGTH) {
    errors.description = 'Описание темы слишком длинное';
  }

  return errors;
};
