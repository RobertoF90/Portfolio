import React from 'react';

import Projects from '../home/Projects';
import { Container } from '@chakra-ui/react';
import HeadingSub from '../home/HeadingSub';

function portfolio({ projects }) {
  return (
    <div>
      <Container py={4} maxW="550px" textAlign="justify">
        <HeadingSub text="Works" />
        <Projects projects={projects} />
      </Container>
    </div>
  );
}

export default portfolio;
