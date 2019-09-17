const mongoose = require('mongoose');
const Auth = require('./Auth');

const User = mongoose.model('users');

class Login extends Auth {
    checkPassword(user) {
        const { password } = this.data;

        user.isPasswordCorrect(password, (error, isSame) => {
            if (error) {
                this.response.status(500).send('Ошибка во время входа. Пожалуйста, повторите попытку позже.');
            } else if (!isSame) {
                this.response.status(401).send('Неверные имя пользователя, email-адрес или пароль.');
            } else {
                this.sendWebtoken(user);
            }
        });
    }

    checkEmail() {
        const { name } = this.data;

        User.findOne({ email: name }, (error, user) => {
            if (error) {
                this.response.status(500).send('Ошибка во время входа. Пожалуйста, повторите попытку позже.');
            } else if (!user) {
                this.response.status(401).send('Неверные имя пользователя, email-адрес или пароль.');
            } else {
                this.checkPassword(user);
            }
        });
    }

    checkUsername() {
        const { name } = this.data;

        User.findOne({ name }, (error, user) => {
            if (error) {
                this.response.status(500).send('Ошибка во время входа. Пожалуйста, повторите попытку позже.');
            } else if (!user) {
                this.checkEmail();
            } else {
                this.checkPassword(user);
            }
        });
    }

    execute() {
        this.checkUsername();
    }
}

module.exports = Login;
