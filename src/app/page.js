import { React } from 'react';

import { getData } from '@/lib/data';
import Home from './ui/home/Home';

export const dynamic = 'force-dynamic';

async function page() {
  const projects = await getData();

  return (
    <div>
      <Home projects={projects} />
    </div>
  );
}

export default page;
