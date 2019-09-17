require('../models/User');
const Registration = require('../logic/auth/Registration');
const Login = require('../logic/auth/Login');
const Authentication = require('../logic/auth/Authentication');
const Logout = require('../logic/auth/Logout');

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

    app.delete('/api/logout', (request, response) => {
        new Logout(request, response).execute();
    });
};
