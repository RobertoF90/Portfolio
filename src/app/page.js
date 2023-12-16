import { React } from 'react';

import Header from './Components/Header/Header';
import LatestWorks from './Components/LatestWorks/LatestWorks';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer';
import { connectToDatabase } from '@/utils/connectMongo';

async function getData() {
  const res = await fetch('http://localhost:3000/api/projects');
  const data = await res.json();
  return data;
}

async function page() {
  const projects = await getData();
  // console.log(projects);
  return (
    <div>
      <Header />
      <LatestWorks projects={projects} />
      <GetInTouch />
    </div>
  );
}

export default page;
