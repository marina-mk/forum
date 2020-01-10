const mongoose = require('mongoose');

const { Schema } = mongoose;

const sectionSchema = new Schema({
    title: { type: String, required: true },
    index: { type: Number, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    topicsCount: { type: Number, required: true },
    postsCount: { type: Number, required: true },
});

mongoose.model('sections', sectionSchema);
