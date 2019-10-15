const mongoose = require('mongoose');
const Auth = require('./Auth');

const User = mongoose.model('users');

class Authentication extends Auth {
    execute() {
        this.checkWebtoken((response, decodedEmail) => {
            User.findOne({ email: decodedEmail }, (err, user) => {
                if (err) {
                    response.status(500).send('Internal server error occurred during authentication');
                } else if (!user) {
                    response.status(404).send('Not found user with given token');
                } else {
                    this.sendUserdata(user);
                }
            });
        });
    }
}

module.exports = Authentication;
