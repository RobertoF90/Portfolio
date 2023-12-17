'use server';

import { revalidatePath } from 'next/cache';

export default async function deleteProject(title) {
  try {
    const response = await fetch(`${process.env.API_URL}/api/projects/`, {
      method: 'DELETE',
      body: JSON.stringify(title),
    });
    const data = await response.json();
    revalidatePath('/');

    console.log(data.message);
    return data;
  } catch (error) {
    console.log(error);
  }
}
