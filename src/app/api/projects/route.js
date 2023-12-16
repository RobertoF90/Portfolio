import { connectToDatabase } from '@/utils/connectMongo';

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

    return Response.json(projects.reverse());
  } catch (error) {
    console.log(error);
  }
}
