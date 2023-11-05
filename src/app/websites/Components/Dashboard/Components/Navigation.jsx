'use client';
import React from 'react';

import { Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';

function Navigation({ projects, setSelected }) {
  function handleClick(title) {
    const [project] = projects.filter((project) => project.title === title);

    setSelected(project);
  }

  return (
    <Flex direction="column" p="2" flex={20}>
      {projects.map((project, i) => (
        <Box
          key={i}
          py="2"
          px="4"
          transition="all 0.1s"
          _hover={{ transform: 'scale(1.05)' }}
        >
          <Image
            src={project.image}
            width={1349}
            height={643}
            alt={project.title}
            priority={true}
            onClick={(e) => handleClick(e.target.alt)}
          />
        </Box>
      ))}
    </Flex>
  );
}

export default Navigation;
