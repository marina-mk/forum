const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');

class Auth {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.data = request.body;
        this.webTokenName = 'authToken';
    }

    sendUserdata(user, status = 200) {
        this.response.status(status).send({ name: user.name });
    }

    sendWebtoken(user, status) {
        const { rememberme } = this.data;
        const maxAge = rememberme ? 2592e6 : 36e5;
        const webtoken = jsonwebtoken.sign({ email: user.email }, keys.authSecretToken);

        this.response.cookie(this.webTokenName, webtoken, { maxAge, httpOnly: true, sameSite: 'lax' });
        this.sendUserdata(user, status);
    }

    checkWebtoken(callback) {
        const authToken = this.request.cookies[this.webTokenName];

        if (authToken) {
            jsonwebtoken.verify(authToken, keys.authSecretToken, (error, decoded) => {
                if (error) {
                    this.response.status(401).send('Unauthorized: Invalid token');
                } else {
                    callback(this.response, decoded.email);
                }
            });
        } else {
            this.response.status(401).send('Unauthorized: No token provided');
        }
    }
}

module.exports = Auth;
