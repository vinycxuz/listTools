const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toolSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true }
});

const toolsSchema = new Schema({
  development: [toolSchema],
  designUIUX: [toolSchema],
  audioVideo: [toolSchema],
  textDocument: [toolSchema]
});

module.exports = mongoose.model('Tools', toolsSchema);