export default {
  registeredFields: {
    name: { name: 'name', type: 'Field', count: 1 },
    email: { name: 'email', type: 'Field', count: 1 },
    password: { name: 'password', type: 'Field', count: 1 },
    confirmPassword: { name: 'confirmPassword', type: 'Field', count: 1 },
  },
  syncErrors: {
    email: 'Обязательное поле',
    name: 'Обязательное поле',
    password: 'Обязательное поле',
    confirmPassword: 'Обязательное поле',
  },
};
