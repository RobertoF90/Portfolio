'use server';

import { NEXT_URL } from '@/app/utils';
import { revalidatePath } from 'next/cache';

export default async function editProject(formData, title) {
  try {
    console.log(formData);
    const response = await fetch(
      `${NEXT_URL}/api/projects?title=${title}`,
      {
        method: 'PUT',
        body: formData,
      }
    );
    const data = await response.json();
    revalidatePath('/');

    console.log(data.message);
    return data;
  } catch (error) {
    console.log(error);
  }
}
