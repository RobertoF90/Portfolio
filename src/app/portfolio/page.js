import { React } from 'react';

import { getData } from '@/lib/data';
import Portfolio from '@/app/ui/portfolio/Portfolio';

export const dynamic = 'force-dynamic';

async function page() {
  const projects = await getData();

  return (
    <div>
      <Portfolio projects={projects} />
    </div>
  );
}

export default page;
