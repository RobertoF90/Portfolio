'use client';
import { useState, React } from 'react';

import ProjectCard from './ProjectCard';

import { Text, Grid, Flex, Link, Container } from '@chakra-ui/react';

function Projects({ projects }) {
  const [loading, setLoading] = useState(false);

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      justify="center"
    >
      {loading ? (
        <Text>LOADING</Text>
      ) : (
        <Flex direction="column" align="center">
          <Grid
            py={4}
            templateColumns={[
              'repeat(1, minmax(0, 1fr))',
              'repeat(2, minmax(0, 1fr))',
            ]}
            gap="6"
            justifyItems="center"
          >
            {projects.map((project, i) => (
              <Link
                key={i}
                isExternal
                href={project.link}
                _hover={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                <ProjectCard project={project} />
              </Link>
            ))}
          </Grid>
        </Flex>
      )}
    </Flex>
  );
}

export default Projects;
