import React from 'react';
import Navigation from '../Components/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import { API_URL } from '../utils';

async function getData() {
  const res = await fetch(`${API_URL}/api/projects`);

  const data = await res.json();
  return data;
}

async function page() {
  const projects = await getData();

  return (
    <div>
      <Dashboard projects={projects} />
    </div>
  );
}

export default page;
