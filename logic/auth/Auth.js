const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');

class Auth {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.data = request.body;
        this.webTokenName = 'authToken';
    }

    sendUserdata(user) {
        this.response.send({ name: user.name });
    }

    sendWebtoken(user) {
        const webtoken = jsonwebtoken.sign({ email: user.email }, keys.authSecretToken, { expiresIn: '1h' });
        this.response.cookie(this.webTokenName, webtoken, { httpOnly: true });
        this.sendUserdata(user);
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
