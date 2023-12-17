import { React } from 'react';

import Header from './Components/Header/Header';
import LatestWorks from './Components/LatestWorks/LatestWorks';
import GetInTouch from './Components/GetInTouch/GetInTouch';

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/projects`);
  const data = await res.json();
  return data;
}

async function page() {
  const projects = await getData();
  return (
    <div>
      <Header />
      <LatestWorks projects={projects.reverse().slice(0, 4)} />
      <GetInTouch />
    </div>
  );
}

export default page;
