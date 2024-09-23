import React from 'react';

import Projects from '../home/Projects';
import { Container } from '@chakra-ui/react';
import HeadingSub from '../home/HeadingSub';

function portfolio({ projects }) {
  return (
    <div>
      <Container pt={14} maxW={['325px', '475px']} textAlign="justify">
        <HeadingSub text="Works" />
        <Projects projects={projects} />
      </Container>
    </div>
  );
}

export default portfolio;
