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

    app.get('/api/topics/:section', async (request, response) => {
        const { section } = request.params;

        try {
            const topics = await Topic.aggregate(topicsPipeline(section));
            response.send(topics);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching topics');
        }
    });

    app.post('/api/topics/:section', requireAuth, async (request, response) => {
        const { section: sectionName } = request.params;
        const { title, description } = request.body;

        try {
            const user = await User.findOne({ email: request.email });
            const section = await Section.findOne({ name: sectionName });
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
            response.sendStatus(200);
        } catch (err) {
            response.status(422).send('Ошибка во время создания новой темы. Пожалуйста, повторите попытку позже.');
        }
    });

    app.get('/api/posts/:section/:topic', async (request, response) => {
        const { section, topic } = request.params;

        try {
            const topicIndex = +topic;
            const posts = await Post.aggregate(postsPipeline(section, topicIndex));
            response.send(posts);
        } catch (err) {
            response.status(500).send('Internal server error occurred during fetching posts');
        }
    });
};
