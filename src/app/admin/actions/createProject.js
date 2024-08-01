'use server';

import Project from '@/models/project';
import connectDB from '@/lib/utils/database';

import getFormImages from '@/lib/utils/getFormImages';
import { revalidatePath } from 'next/cache';

export default async function createProject(formData) {
  try {
    // console.log(formData);
    const { uploadedImage } = await getFormImages(formData);
    await connectDB();

    await Project.create({
      title: formData.get('title'),
      slug: formData.get('title').toLowerCase().split(' ').join('-'),
      description: formData.get('description'),
      image: uploadedImage.secure_url,
      link: formData.get('link'),
      stack: formData.get('stack'),
      version: formData.get('version'),
    });

    revalidatePath('/');
    return { stutus: 'succeded', message: 'Project Uploaded' };
  } catch (error) {
    console.log(error);
    return { status: 'error', message: error.message };
  }
}
