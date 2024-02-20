'use client';

import { useState, React } from 'react';

import { Box, Flex, Text, GridItem, Link, Heading } from '@chakra-ui/react';

import Image from 'next/image';

function LatestWork({ project }) {
  return (
    <GridItem>
      <Flex
        _hover={{ cursor: 'pointer', textDecoration: 'none' }}
        direction="column"
        align="center"
        gap={2}
      >
        {project.image && (
          <Box borderRadius="16px" w="100%" overflow="hidden">
            <Image
              width={1920}
              height={1080}
              src={project.image}
              alt="Project image"
            />
          </Box>
        )}
        <Heading textAlign="center" fontSize="xl">
          {project.title}
        </Heading>
        <Text textAlign="center">{project.description}</Text>
      </Flex>
    </GridItem>
  );
}

export default LatestWork;
