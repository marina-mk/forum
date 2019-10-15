const Auth = require('../logic/auth/Auth');

module.exports = (request, response, next) => {
    new Auth(request, response).checkWebtoken((res, decodedEmail) => {
        request.email = decodedEmail;
        next();
    });
};
