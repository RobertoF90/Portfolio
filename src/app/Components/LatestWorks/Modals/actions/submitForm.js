'use server';

import { revalidatePath } from 'next/cache';
import { API_URL } from '@/app/utils';

export default async function submitForm(formData) {
  try {
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
