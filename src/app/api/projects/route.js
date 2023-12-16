import { connectToDatabase } from '@/utils/connectMongo';

const { storage } = require('./../storage/storage');
const multer = require('multer');
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

import Project from '@/app/models/project';

export async function GET(request) {
  try {
    await connectToDatabase();

    const projects = await Project.find();

    return Response.json(projects.reverse().slice(0, 4));
  } catch (error) {
    console.log(error);
  }
}
