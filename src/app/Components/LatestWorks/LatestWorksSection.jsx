import React from 'react';

import LatestWorks from './LatestWorks';
import { API_URL } from '../../utils';

async function getData() {
  console.log('getting props');
  //   setLoading(true);

  const res = await fetch(`${API_URL}/api/v1/project`);
  //   setLoading(false);

  return res.json();
}

export default async function LatestWorksSection() {
  const projects = await getData();
  return (
    <div>
      <LatestWorks projects={projects} />
    </div>
  );
}
