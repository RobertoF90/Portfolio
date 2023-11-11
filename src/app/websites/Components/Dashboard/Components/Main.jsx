'use client';

import React from 'react';

import { Flex, Box, Text, Button, Heading, Link } from '@chakra-ui/react';

import Image from 'next/image';

function Main({ project }) {
  return (
    <Flex p="2" direction="column" align="center">
      <Heading textAlign="center">{project.title}</Heading>
      <Flex direction={{ base: 'column', lg: 'row' }} py="4">
        <Flex
          flex={{ base: '100', lg: '40' }}
          direction={{ base: 'column' }}
          align={{ base: 'center', lg: 'baseline' }}
          p={{ base: '0', lg: '6' }}
        >
          <Text fontSize="xl">{project.description}</Text>
          <Link py="4" isExternal href={project.link}>
            <Text fontWeight="bold" fontSize="2xl" color="blue">
              Visit Project
            </Text>
          </Link>
          <Flex gap="12">
            <Text>{project.stack}</Text>
            <Text>{project.version}</Text>
          </Flex>
        </Flex>
        <Flex
          flex={{ base: '100', lg: '60' }}
          px={{ base: '0', lg: '6' }}
          py={{ base: '6', lg: '0' }}
        >
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
