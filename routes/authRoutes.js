require("../models/User");
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.post("/api/register", function(request, response) {
        const { email, password } = request.body;
        const user = new User({ email, password });

        user.save(function(err) {
            if (err) {
                response.status(500).send("Error registering new user please try again.");
            } else {
                response.sendStatus(200);
            }
        });
    });
};
