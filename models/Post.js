const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    index: { type: Number, required: true },
    message: { type: String, required: true },
    _topic: { type: Schema.Types.ObjectId, ref: 'topics' },
    _author: { type: Schema.Types.ObjectId, ref: 'users' },
    created: { type: Date, required: true },
});

mongoose.model('posts', postSchema);
