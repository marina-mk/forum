export default {
  registeredFields: {
    name: { name: 'name', type: 'Field', count: 1 },
    password: { name: 'password', type: 'Field', count: 1 },
    rememberme: { name: 'rememberme', type: 'Field', count: 1 },
  },
  syncErrors: {
    name: 'Обязательное поле',
    password: 'Обязательное поле',
  },
  values: {
    rememberme: true,
  },
};
