'use client';
import { useState, React } from 'react';

import Main from './Components/Main';
import Navigation from './Components/Navigation';
import { Flex } from '@chakra-ui/react';

function Dashboard({ projects }) {
  const [websites, setWebsites] = useState(projects);
  const [selected, setSelected] = useState(projects[0]);

  return (
    <Flex direction="column">
      <Navigation projects={projects} setSelected={setSelected} />
      <Main project={selected} />
    </Flex>
  );
}

export default Dashboard;
