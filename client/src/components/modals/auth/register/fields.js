import { InputField, CheckboxField } from '../../DialogField';

export default [
  {
    name: 'name', component: InputField, type: 'text', placeholder: 'Имя пользователя',
  },
  {
    name: 'email', component: InputField, type: 'email', placeholder: 'Email-адрес',
  },
  {
    name: 'password', component: InputField, type: 'password', placeholder: 'Введите пароль',
  },
  {
    name: 'confirmPassword', component: InputField, type: 'password', placeholder: 'Повторите пароль',
  },
  {
    name: 'rememberme', component: CheckboxField, type: 'checkbox', id: 'rememberme_register', text: 'Запомнить меня',
  },
];
