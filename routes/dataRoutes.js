require('../models/Section');
const mongoose = require('mongoose');

const Section = mongoose.model('sections');

module.exports = (app) => {
    app.get('/api/sections', (request, response) => {
        Section.find({}, (error, sections) => {
            if (error) {
                response.status(500).send('Internal server error occurred during fetching sections');
            } else if (!sections) {
                response.status(404).send('Not found sections in the database');
            } else {
                sections.sort((x, y) => x.index - y.index);
                response.send(sections);
            }
        });
    });
};
