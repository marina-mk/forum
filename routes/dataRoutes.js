/* eslint-disable quote-props */
require('../models/Section');
require('../models/Topic');
const mongoose = require('mongoose');
const sectionsPipeline = require('../logic/data/aggregation/sections');
const topicsPipeline = require('../logic/data/aggregation/topics');

const Section = mongoose.model('sections');
const Topic = mongoose.model('topics');

module.exports = (app) => {
    app.get('/api/sections', async (request, response) => {
        try {
            const sections = await Section.aggregate(sectionsPipeline);
            response.send(sections);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching sections');
        }
    });

    app.get('/api/topics/:section', async (request, response) => {
        const { section } = request.params;

        try {
            const topics = await Topic.aggregate(topicsPipeline(section));
            response.send(topics);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching topics');
        }
    });
};
