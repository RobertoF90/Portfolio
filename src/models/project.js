const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    default: '1.0',
  },
  published: {
    type: Date,
    default: Date.now(),
  },
});

module.exports =
  mongoose.models.Project || mongoose.model('Project', ProjectSchema);
