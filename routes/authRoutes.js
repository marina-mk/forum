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

    app.patch('/api/users/:username', requireAuth, async (request, response) => {
        const { username } = request.params;
        const { topicsCount, postsCount } = request.body;

        try {
            const user = await User.findOne({ name: username });

            if (postsCount) {
                await User.updateOne({ _id: user._id }, { $inc: { "postsCount": postsCount } });
                response.sendStatus(200);
            } else if (topicsCount) {
                await User.updateOne({ _id: user._id }, { $inc: { "topicsCount": topicsCount } });
                response.sendStatus(200);
            } else {
                response.sendStatus(204);
            }
        } catch (err) {
            response.status(500).send('Internal server error occurred during updating user');
        }
    });
};
