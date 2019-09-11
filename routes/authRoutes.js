const Registration = require("../logic/auth/Registration");

module.exports = (app) => {
    app.post("/api/register", (request, response) => {
        new Registration(request, response).execute();
    });
};
