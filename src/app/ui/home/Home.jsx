'use client';
import React from 'react';
import { useState } from 'react';

import { Container, Flex } from '@chakra-ui/react';
import HeadingSub from './HeadingSub';
import Header from './Header';
import Projects from './Projects';
import ProjectsButton from './ProjectsButton';
function Home({ projects }) {
  const [portfolio, setPortfolio] = useState(false);

  return (
    <Flex direction="column" justify="space-between">
      <Header />

      <Container py={4} maxW="550px" textAlign="justify">
        <HeadingSub text="Latest Works" />
        <Projects projects={projects.slice(0, 2)} />
        <ProjectsButton />
      </Container>
    </Flex>
  );
}

export default Home;
