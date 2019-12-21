/* eslint-disable quote-props */
require('../models/Section');
require('../models/Topic');
require('../models/Post');
const mongoose = require('mongoose');
const sectionsPipeline = require('../logic/data/aggregation/sections');
const topicsPipeline = require('../logic/data/aggregation/topics');
const postsPipeline = require('../logic/data/aggregation/posts');
const requireAuth = require('../middlewares/requireAuth');

const User = mongoose.model('users');
const Section = mongoose.model('sections');
const Topic = mongoose.model('topics');
const Post = mongoose.model('posts');

module.exports = (app) => {
    app.get('/api/sections', async (request, response) => {
        try {
            const sections = await Section.aggregate(sectionsPipeline);
            response.send(sections);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching sections');
        }
    });

    app.get('/api/sections/:sectionId', async (request, response) => {
        const { sectionId } = request.params;

        try {
            const section = await Section.findOne({ name: sectionId }, { "title": 1, "name": 1 });

            if (!section) {
                response.status(404).send('Not found section with given id');
            } else {
                response.send(section);
            }
        } catch (err) {
            response.status(500).send('Internal server error occurred during searching section by id');
        }
    });

    app.get('/api/sections/:sectionId/topics', async (request, response) => {
        const { sectionId } = request.params;

        try {
            const topics = await Topic.aggregate(topicsPipeline(sectionId));
            response.send(topics);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching topics');
        }
    });

    app.post('/api/sections/:sectionId/topics', requireAuth, async (request, response) => {
        const { sectionId } = request.params;
        const { title, description } = request.body;

        try {
            const user = await User.findOne({ email: request.email });
            const section = await Section.findOne({ name: sectionId });
            const latestTopic = await Topic.findOne({ _section: section._id }).sort({ index: -1 });
            const index = latestTopic ? latestTopic.index + 1 : 0;

            const topic = new Topic({
                index,
                title,
                description,
                _author: user._id,
                _section: section._id,
                created: Date.now(),
            });

            await topic.save();
            response.sendStatus(201);
        } catch (err) {
            response.status(422).send('Ошибка во время создания новой темы. Пожалуйста, повторите попытку позже.');
        }
    });

    app.get('/api/sections/:sectionId/topics/:topicId', async (request, response) => {
        const { sectionId, topicId } = request.params;
        const topicIndex = +topicId.slice(6) - 1; // Cut topic index from stringId of the form "topic-1"

        try {
            const section = await Section.findOne({ name: sectionId });
            const topic = await Topic.findOne({ _section: section._id, index: topicIndex }, { "title": 1, "index": 1 });

            if (!topic) {
                response.status(404).send('Not found topic with given id');
            } else {
                response.send(topic);
            }
        } catch (err) {
            response.status(500).send('Internal server error occurred during searching topic by id');
        }
    });

    app.get('/api/sections/:sectionId/topics/:topicId/posts', async (request, response) => {
        const { sectionId, topicId } = request.params;
        const topicIndex = +topicId.slice(6) - 1; // Cut topic index from stringId of the form "topic-1"

        try {
            const posts = await Post.aggregate(postsPipeline(sectionId, topicIndex));
            response.send(posts);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching posts');
        }
    });

    app.post('/api/sections/:sectionId/topics/:topicId/posts', async (request, response) => {
        response.status(501).send('Not Implemented');
    });
};
