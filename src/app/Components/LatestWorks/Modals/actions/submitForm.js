'use server';

import Project from '@/models/project';
import connectDB from '@/utils/database';

import { NEXT_URL } from '@/app/utils';
import getFormImages from '@/utils/getFormImages';
import { revalidatePath } from 'next/cache';

export default async function submitForm(formData) {
  try {
    // console.log(formData);
    const { uploadedImage } = await getFormImages(formData);
    await connectDB();

    const project = await Project.create({
      title: formData.get('title'),
      description: formData.get('description'),
      image: uploadedImage.secure_url,
      link: formData.get('link'),
      stack: formData.get('stack'),
      published: formData.get('published'),
      version: formData.get('version'),
    });

    revalidatePath('/');
    return { stutus: 'succeded', message: 'Project Uploaded' };
  } catch (error) {
    console.log(error);
    return { status: 'error', message: error.message };
  }
}
