import React from 'react';
import Navigation from './../Components/Header/Components/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';

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
      <Navigation />
      <Dashboard projects={projects} />
    </div>
  );
}

export default page;
