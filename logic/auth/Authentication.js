const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const Auth = require("./Auth");
const keys = require("../../config/keys");

const User = mongoose.model("users");

class Authentication extends Auth {
    execute() {
        const { token } = this.request.cookies;

        if (token) {
            jsonwebtoken.verify(token, keys.authSecretToken, (error, decoded) => {
                if (error) {
                    this.response.status(401).send("Unauthorized: Invalid token");
                } else {
                    User.findOne({ email: decoded.email }, (err, user) => {
                        if (err) {
                            this.response.status(500).send("Internal server error occurred during authentication");
                        } else if (!user) {
                            this.response.status(404).send("Not found user with given token");
                        } else {
                            this.sendUserdata(user);
                        }
                    });
                }
            });
        }
    }
}

module.exports = Authentication;
