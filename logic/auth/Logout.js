const Auth = require('./Auth');

class Logout extends Auth {
    execute() {
        this.response.clearCookie(this.webTokenName).sendStatus(204);
    }
}

module.exports = Logout;
