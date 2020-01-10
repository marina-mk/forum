const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
    index: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String },
    _section: { type: Schema.Types.ObjectId, ref: 'sections' },
    _author: { type: Schema.Types.ObjectId, ref: 'users' },
    created: Date,
    postsCount: { type: Number, required: true },
});

mongoose.model('topics', topicSchema);
