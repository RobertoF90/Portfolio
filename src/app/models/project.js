import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  title: {
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

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
