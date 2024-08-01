'use server';

import { revalidatePath } from 'next/cache';

import connectDB from '@/lib/utils/database';
import Project from '@/models/project';

export default async function deleteProject(slug) {
  console.log(slug);
  try {
    await connectDB();
    await Project.deleteOne({ slug: slug });
    revalidatePath('/');

    return { message: 'Page Deleted' };
  } catch (error) {
    console.log(error);
  }
}
