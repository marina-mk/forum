const jsonwebtoken = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (request, response, next) => {
    const { token } = request.cookies;

    if (token) {
        jsonwebtoken.verify(token, keys.authSecretToken, (error, decoded) => {
            if (error) {
                response.status(401).send("Unauthorized: Invalid token");
            } else {
                request.email = decoded.email;
                next();
            }
        });
    } else {
        response.status(401).send("Unauthorized: No token provided");
    }
};
