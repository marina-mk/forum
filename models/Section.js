const mongoose = require('mongoose');

const { Schema } = mongoose;

const sectionSchema = new Schema({
    title: { type: String, required: true },
    index: { type: Number, required: true },
    description: { type: String, required: true },
    path: { type: String, required: true, unique: true },
});

mongoose.model('sections', sectionSchema);
