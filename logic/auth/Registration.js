const mongoose = require('mongoose');
const Auth = require('./Auth');

const User = mongoose.model('users');

class Registration extends Auth {
    checkUsername(next) {
        const { name } = this.data;

        User.findOne({ name }, (error, result) => {
            if (error) {
                this.response.status(500).send('Ошибка во время регистрации. Пожалуйста, повторите попытку позже.');
            } else if (result) {
                this.response.status(422).send('Данное имя пользователя используется другим пользователем.');
            } else if (next) {
                next();
            }
        });
    }

    checkEmail(next) {
        const { email } = this.data;

        User.findOne({ email }, (error, result) => {
            if (error) {
                this.response.status(500).send('Ошибка во время регистрации. Пожалуйста, повторите попытку позже.');
            } else if (result) {
                this.response.status(422).send('Данный email-адрес уже используется.');
            } else if (next) {
                next();
            }
        });
    }

    saveUser(next) {
        const { name, email, password } = this.data;
        const user = new User({ name, email, password, topicsCount: 0, postsCount: 0, role: 'user' });

        user.save((error) => {
            if (error) {
                this.response.status(500).send('Ошибка во время регистрации. Пожалуйста, повторите попытку позже.');
            } else {
                this.sendWebtoken(user, 201);
                if (next) next();
            }
        });
    }

    execute() {
        const handlers = [this.checkUsername, this.checkEmail, this.saveUser];
        let handlersChain = null;

        handlers.reverse().forEach((handler) => {
            handlersChain = handler.bind(this, handlersChain);
        });

        handlersChain();
    }
}

module.exports = Registration;
