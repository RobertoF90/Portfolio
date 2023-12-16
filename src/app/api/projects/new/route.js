import Project from '@/app/models/project';

const multer = require('multer');

import path from 'path';
import { writeFile } from 'fs/promises';
export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
});

export async function POST(req, res) {
  try {
    const formdata = await req.formData();
    const image = formdata.get('image');

    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = 'project-' + image.name.replaceAll(' ', '_');
    console.log(filename);
    try {
      await writeFile(path.join(process.cwd(), 'public/' + filename), buffer);
    } catch (error) {
      console.log('Error occured ', error);
    }

    const project = await Project.create({
      title: formdata.get('title'),
      description: formdata.get('description'),
      image: filename,
      link: formdata.get('link'),
      stack: formdata.get('stack'),
      published: formdata.get('published'),
      version: formdata.get('version'),
    });

    return Response.json(formdata);
  } catch (error) {
    console.log(error.message);
  }
}
