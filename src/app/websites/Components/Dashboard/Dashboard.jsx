'use client';
import { useState, React } from 'react';

import Main from './Components/Main';
import Navigation from './Components/Navigation';

function Dashboard({ projects }) {
  const [websites, setWebsites] = useState(projects);
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div style={{ display: 'flex' }}>
      <Main project={selected} />
      <Navigation projects={projects} setSelected={setSelected} />
    </div>
  );
}

export default Dashboard;
