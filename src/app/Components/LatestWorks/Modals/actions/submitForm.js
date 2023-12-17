'use server';

import { revalidatePath } from 'next/cache';

export default async function submitForm(formData) {
  try {
    console.log(formData);
    const response = await fetch(`${process.env.API_URL}/api/projects/new`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    revalidatePath('/');

    console.log(data.message);
    return data;
  } catch (error) {
    console.log(error);
  }
}
