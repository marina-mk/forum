const Registration = require("../logic/auth/Registration");
const Login = require("../logic/auth/Login");

module.exports = (app) => {
    app.post("/api/register", (request, response) => {
        new Registration(request, response).execute();
    });

    app.post("/api/login", (request, response) => {
        new Login(request, response).execute();
    });
};
