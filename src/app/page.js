import { React } from 'react';

import Header from './Components/Header/Header';
import LatestWorks from './Components/LatestWorks/LatestWorks';
import GetInTouch from './Components/GetInTouch/GetInTouch';

import { NEXT_URL } from './utils';

async function getData() {
  const res = await fetch(`${NEXT_URL}/api/projects`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

async function page() {
  const projects = await getData();
  return (
    <div>
      <Header />
      <LatestWorks projects={projects} />
      <GetInTouch />
    </div>
  );
}

export default page;
