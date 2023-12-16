'use server';
export default async function submitForm(formData) {
  try {
    const response = await fetch(`http://localhost:3000/api/projects/new`, {
      method: 'POST',
      body: formData,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
