const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies passed by our browser:

app.get('/api/test', (request, response) => {
    response.send({ test: 'Test' });
});

require('./routes/authRoutes')(app);
require('./routes/dataRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production static assets
    app.use(express.static('client/dist'));

    // Express will serve up the index.html file if it doesn't recognize the route
    app.get('*', (request, response) => {
        response.sendFile(
            path.resolve(__dirname, 'client', 'dist', 'index.html'),
        );
    });
}

app.listen(PORT);
