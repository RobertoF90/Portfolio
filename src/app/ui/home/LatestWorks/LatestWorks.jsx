'use client';
import { useState, React } from 'react';

import LatestWork from './LatestWork';

import { Button, Text, Grid, Flex, Heading, Link } from '@chakra-ui/react';

function LatestWorks({ projects }) {
  const [loading, setLoading] = useState(false);

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      justify="center"
      pt="6"
    >
      {loading ? (
        <Text>LOADING</Text>
      ) : (
        <Flex direction="column" align="center">
          <Heading>Projects</Heading>

          <Grid
            py="6"
            px={{ base: '7.5%', sm: '15%', md: '15%', lg: '20%' }}
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
                <LatestWork project={project} />
              </Link>
            ))}
          </Grid>
        </Flex>
      )}
    </Flex>
  );
}

export default LatestWorks;
