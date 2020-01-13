const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
    index: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    _section: { type: Schema.Types.ObjectId, ref: 'sections' },
    _author: { type: Schema.Types.ObjectId, ref: 'users' },
    created: { type: Date, required: true },
    postsCount: { type: Number, required: true },
    views: { type: Number, required: true },
});

mongoose.model('topics', topicSchema);
