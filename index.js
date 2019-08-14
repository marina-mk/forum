const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/test', (request, response) => {
    response.send({ test: 'Test' });
});

if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    // Express will serve up production static assets
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT);
