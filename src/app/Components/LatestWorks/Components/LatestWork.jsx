'use client';

import React from 'react';

import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  Link,
  Heading,
} from '@chakra-ui/react';

function LatestWork({ project }) {
  return (
    <GridItem>
      <Link _hover={{ textDecoration: 'none' }} isExternal href={project.link}>
        <Flex direction="column" align="center" py="4">
          {project.image && (
            <Image borderRadius="16px" maxH="150" src={project.image} alt="" />
          )}
          <Heading textAlign="center" fontSize="2xl">
            {project.title}
          </Heading>
          <Text>{project.description}</Text>
        </Flex>
      </Link>
    </GridItem>
  );
}

export default LatestWork;
