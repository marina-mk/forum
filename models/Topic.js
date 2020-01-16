const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
    index: { type: Number, required: true, unique: true },
    title: { type: String, required: true, trim: true, minlength: 1, maxlength: 50 },
    description: { type: String, trim: true, minlength: 1, maxlength: 200 },
    _section: { type: Schema.Types.ObjectId, ref: 'sections' },
    _author: { type: Schema.Types.ObjectId, ref: 'users' },
    created: { type: Date, required: true },
    postsCount: { type: Number, required: true },
    views: { type: Number, required: true },
});

mongoose.model('topics', topicSchema);
