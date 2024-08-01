import { React } from 'react';

import Header from './ui/home/Header/Header';
import LatestWorks from './ui/home/LatestWorks/LatestWorks';
import { getData } from '@/lib/data';

async function page() {
  const projects = await getData();
  return (
    <div>
      <Header />
      <LatestWorks projects={projects} />
    </div>
  );
}

export default page;
