'use client';

import React from 'react';

import { Flex, Box, Text, Button, Heading, Link } from '@chakra-ui/react';

import Image from 'next/image';

function Main({ project }) {
  return (
    <Flex p="2" direction="column" align="center" flex={80}>
      <Heading>{project.title}</Heading>
      <Flex p="12">
        <Flex direction="column" flex="40">
          <Text fontSize="xl">{project.description}</Text>
          <Link py="4" href={project.link}>
            <Text fontWeight="bold" fontSize="2xl" color="blue">
              Visit Project
            </Text>
          </Link>
          <Text>{project.stack}</Text>
          <Text>{project.version}</Text>
        </Flex>
        <Flex flex="60">
          <Image
            src={project.image}
            width={1349}
            height={643}
            alt="image"
            priority={true}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Main;
