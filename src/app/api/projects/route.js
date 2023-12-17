import { connectToDatabase } from '@/utils/connectMongo';

import Project from '@/app/models/project';

import path from 'path';
import { writeFile } from 'fs/promises';
export async function GET(request) {
  try {
    await connectToDatabase();
    const projects = await Project.find();
    return Response.json(projects);
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(req) {
  const projectTitle = req.nextUrl.searchParams.get('title');
  console.log(projectTitle);

  try {
    const formdata = await req.formData();
    console.log('formdata');
    const image = formdata.get('image');

    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = 'project-' + image.name.replaceAll(' ', '_');
    console.log(filename);
    try {
      await writeFile(path.join(process.cwd(), 'public/' + filename), buffer);
    } catch (error) {
      console.log('Error occured ', error);
    }

    try {
      const project = await Project.findOneAndUpdate(
        { title: projectTitle },
        {
          title: formdata.get('title'),
          description: formdata.get('description'),
          image: filename,
          link: formdata.get('link'),
          stack: formdata.get('stack'),
          published: formdata.get('published'),
          version: formdata.get('version'),
        },
        {
          returnOriginal: false,
        }
      );
      console.log('successfully updated');
      return Response.json({ message: 'update successfull' });
    } catch (error) {
      console.log(error);
      return Response.json(error);
    }
  } catch (error) {
    console.log(error.message);
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
