import Project from '@/app/models/project';
import connectDB from '@/utils/database';
export async function GET(request) {
  try {
    await connectDB();
    const projects = await Project.find();
    return Response.json(projects);
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req) {
  const title = await req.json();
  try {
    await Project.deleteOne({ title });
    return Response.json({ message: 'project deleted' });
  } catch (error) {
    console.log(error);
  }
}
