'use server';

import { revalidatePath } from 'next/cache';

export default async function deleteProject(title) {
  try {
    const response = await fetch(`http://localhost:3000/api/projects/`, {
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
