import { connectToDatabase } from '@/utils/connectMongo';

export const dynamic = 'force-dynamic';
export async function GET(request) {
  try {
    const client = await connectToDatabase();
    const db = client.db('test');
    const items = await db.collection('projects').find({}).toArray();
    return Response.json(items);
  } catch (error) {
    console.log(error);
  }
}
