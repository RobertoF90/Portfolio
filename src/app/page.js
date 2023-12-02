import { React } from 'react';

import Header from './Components/Header/Header';
import LatestWorks from './Components/LatestWorks/LatestWorks';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer';
import { connectToDatabase } from '@/utils/connectMongo';

async function getData() {
  const client = await connectToDatabase();
  const db = client.db('test');
  const items = await db.collection('projects').find({}).toArray();
  const data = Response.json(items);
  return data.json();
}

async function page() {
  const projects = await getData();
  return (
    <div>
      <Header />
      <LatestWorks projects={projects} />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default page;
