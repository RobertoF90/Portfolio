'use client';

import React from 'react';

import { Box, Flex, Text, Image, Grid, GridItem, Link } from '@chakra-ui/react';

function LatestWork({ project }) {
  return (
    <GridItem>
      <Link _hover={{ textDecoration: 'none' }} isExternal href={project.link}>
        <Flex direction="column" align="center" padding="1rem 0">
          {project.image && (
            <Image borderRadius="16px" maxH="150px" src={project.image} />
          )}
          <Text textAlign="center" fontSize="2xl" fontWeight="bold">
            {project.title}
          </Text>
          <Text>{project.description}</Text>
        </Flex>
      </Link>
    </GridItem>
  );
}

export default LatestWork;
