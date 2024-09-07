import { NEXT_URL } from '@/lib/utils/nextUrl';

export async function getData(request) {
  try {
    const res = await fetch(`${NEXT_URL}/api/projects`, { cache: 'no-store' });
    const data = await res.json();
    return data.reverse();
  } catch (error) {
    console.log(error);
  }
}
