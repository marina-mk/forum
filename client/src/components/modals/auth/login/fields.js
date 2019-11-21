import { InputField, CheckboxField } from '../../DialogField';

export default [
  {
    name: 'name', component: InputField, type: 'text', placeholder: 'Имя пользователя или email-адрес',
  },
  {
    name: 'password', component: InputField, type: 'password', placeholder: 'Пароль',
  },
  {
    name: 'rememberme', component: CheckboxField, type: 'checkbox', id: 'rememberme_login', text: 'Запомнить меня',
  },
];
