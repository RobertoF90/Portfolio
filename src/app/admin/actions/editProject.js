'use server';
import connectDB from '@/lib/utils/database';
import Project from '@/models/project';
import { headers } from 'next/headers';
import getFormImages from '@/lib/utils/getFormImages';
import { revalidatePath } from 'next/cache';

export default async function editPage(formData) {
  try {
    const uploadedImage =
      formData.get('image').size > 0
        ? await getFormImages(formData)
        : formData.get('prevImage');

    console.log(uploadedImage);
    await connectDB();

    await Project.findOneAndUpdate(
      { _id: formData.get('id') },
      {
        title: formData.get('title'),
        slug: formData.get('title').toLowerCase().split(' ').join('-'),
        description: formData.get('description'),
        image: uploadedImage,
        link: formData.get('link'),
        stack: formData.get('stack'),
        version: formData.get('version'),
      }
    );

    revalidatePath('/admin');

    return { stutus: 'succeded', message: 'Page Updated' };
  } catch (error) {
    console.log('message', error);
    return { status: 'error', message: error.message };
  }
}
