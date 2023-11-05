import React from 'react';
import Navigation from './../Components/Header/Components/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';

import { API_URL } from './../utils';

async function getData() {
  //   setLoading(true);

  const res = await fetch(`${API_URL}/api/v1/project`);
  //   setLoading(false);

  return res.json();
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
