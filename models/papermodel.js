const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'users' },
    title: String,
    course: String,
    max: String,
    questions: Array,
})

const model = mongoose.model('papers', schema);

module.exports = model;