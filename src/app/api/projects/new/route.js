import Project from '@/models/project';

import path from 'path';
import { writeFile } from 'fs/promises';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function POST(req, res) {
  try {
    // const formdata = await req.formData();
    // const image = formdata.get('image');
    // console.log(image);

    // cloudinary.uploader.upload(
    //   image,
    //   { folder: 'portfolio' },
    //   function (error, result) {
    //     console.log(result);
    //   }
    // );
    // const buffer = Buffer.from(await image.arrayBuffer());
    // const filename = 'project-' + image.name.replaceAll(' ', '_');
    // console.log(filename);
    // try {
    //   await writeFile(path.join(process.cwd(), 'public/' + filename), buffer);
    // } catch (error) {
    //   console.log('Error occured ', error);
    // }

    try {
      // const project = await Project.create({
      //   title: formdata.get('title'),
      //   description: formdata.get('description'),
      //   image: filename,
      //   link: formdata.get('link'),
      //   stack: formdata.get('stack'),
      //   published: formdata.get('published'),
      //   version: formdata.get('version'),
      // });
      console.log('successfully uploaded');
      return Response.json({ message: 'upload successfull' });
    } catch (error) {
      console.log(error);
      return Response.json(error);
    }
  } catch (error) {
    console.log(error.message);
  }
}
