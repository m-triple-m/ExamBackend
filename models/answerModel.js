const mongoose = require("../connection");
const Schema = mongoose.Schema;

const schema = new Schema({
  author: { type: mongoose.Types.ObjectId, ref: "users" },
  paper: { type: mongoose.Types.ObjectId, ref: "papers" },
  name: String,
  email: String,
  data: Object,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("answers", schema);

module.exports = model;
