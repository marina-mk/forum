const Auth = require('../logic/auth/Auth');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = async (request, response, next) => {
    try {
        const user = await User.findOne({ email: request.email });

        if (user) {
            if (user.role === 'admin') {
                next();
            } else {
                response.status(403).send('Forbidden: User does not have the required permissions');
            }
        } else {
            response.status(401).send('Unauthorized: Not found user with given token');
        }
    } catch (err) {
        response.status(500).send('Internal server error occurred during checking user role');
    }
};
