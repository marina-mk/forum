require('../models/User');
const mongoose = require('mongoose');
const Registration = require('../logic/auth/Registration');
const Login = require('../logic/auth/Login');
const Authentication = require('../logic/auth/Authentication');
const Logout = require('../logic/auth/Logout');
const requireAuth = require('../middlewares/requireAuth');

const User = mongoose.model('users');

module.exports = (app) => {
    app.post('/api/register', (request, response) => {
        new Registration(request, response).execute();
    });

    app.post('/api/login', (request, response) => {
        new Login(request, response).execute();
    });

    app.get('/api/auth', (request, response) => {
        new Authentication(request, response).execute();
    });

    app.get('/api/checkToken', requireAuth, (request, response) => {
        response.sendStatus(200);
    });

    app.delete('/api/logout', (request, response) => {
        new Logout(request, response).execute();
    });

    app.patch('/api/user', requireAuth, async (request, response) => {
        try {
            const user = await User.findOne({ email: request.email });

            if (request.body.postsCount) {
                await User.updateOne({ _id: user._id }, { $inc: { "postsCount": 1 } });
                response.sendStatus(200);
            } else if (request.body.topicsCount) {
                await User.updateOne({ _id: user._id }, { $inc: { "topicsCount": 1 } });
                response.sendStatus(200);
            } else {
                response.sendStatus(204);
            }
        } catch (err) {
            response.status(500).send('Internal server error occurred during updating user');
        }
    });
};
