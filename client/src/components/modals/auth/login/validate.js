export default (values, { fields }) => {
  const errors = {};

  fields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "Обязательное поле";
    }
  });

  return errors;
};
