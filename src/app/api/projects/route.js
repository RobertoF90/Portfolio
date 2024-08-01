import Project from '@/models/project';
import connectDB from '@/lib/utils/database';
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find();
    console.log(projects);
    return Response.json(projects);
  } catch (error) {
    console.log(error);
  }
}
