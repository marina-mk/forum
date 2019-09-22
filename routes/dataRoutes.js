/* eslint-disable quote-props */
require('../models/Section');
require('../models/Topic');
const mongoose = require('mongoose');

const Section = mongoose.model('sections');
const Topic = mongoose.model('topics');

module.exports = (app) => {
    app.get('/api/sections', async (request, response) => {
        try {
            const sections = await Section.find({}).sort({ index: 'asc' }).select(['-index']);

            if (sections) {
                response.send(sections);
            } else {
                response.status(404).send('Not found sections in the database');
            }
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching sections');
        }
    });

    app.get('/api/topics/:section', async (request, response) => {
        const { section } = request.params;

        try {
            const topics = await Topic.aggregate([
                {
                    $lookup: {
                        from: "sections",
                        localField: "_section",
                        foreignField: "_id",
                        as: "section",
                    },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "_author",
                        foreignField: "_id",
                        as: "author",
                    },
                },
                {
                    $match: { "section.name": section },
                },
                {
                    $sort: { "index": 1 },
                },
                {
                    $project: {
                        "_id": 1,
                        "title": 1,
                        "description": 1,
                        "author.name": 1,
                        "created": 1,
                    },
                },
            ]);

            response.send(topics);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching topics');
        }
    });
};
