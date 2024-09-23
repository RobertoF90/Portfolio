'use client';
import { useState, React } from 'react';

import ProjectCard from './ProjectCard';

import { Text, Grid, Flex, Link } from '@chakra-ui/react';

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
            templateColumns={{ base: '1fr', sm: '1fr ', md: '1fr 1fr' }}
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
