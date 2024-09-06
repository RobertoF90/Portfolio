import { React } from 'react';

import Header from './ui/home/Header';
import Projects from './ui/home/Projects';
import { getData } from '@/lib/data';

export const dynamic = 'force-dynamic';

async function page() {
  const projects = await getData();

  return (
    <div>
      <Header />
      <Projects projects={projects} />
    </div>
  );
}

export default page;
