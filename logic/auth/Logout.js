const Auth = require("./Auth");

class Logout extends Auth {
    execute() {
        this.response.clearCookie(this.webTokenName).sendStatus(200);
    }
}

module.exports = Logout;
