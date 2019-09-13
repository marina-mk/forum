const jsonwebtoken = require("jsonwebtoken");
const keys = require("../../config/keys");

class Auth {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.data = request.body;
    }

    sendUserdata(user) {
        this.response.send({ name: user.name });
    }

    sendWebtoken(user) {
        const webtoken = jsonwebtoken.sign({ email: user.email }, keys.authSecretToken, { expiresIn: "1h" });
        this.response.cookie("token", webtoken, { httpOnly: true });
        this.sendUserdata(user);
    }
}

module.exports = Auth;
