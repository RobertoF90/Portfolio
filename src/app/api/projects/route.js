import { connectToDatabase } from '@/utils/connectMongo';

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

export async function DELETE(req) {
  // console.log(await req.json());
  console.log('deleting project');
  const title = await req.json();
  console.log(title);
  try {
    await Project.deleteOne({ title });
    return Response.json({ message: 'project deleted' });
  } catch (error) {
    console.log(error);
  }
}
