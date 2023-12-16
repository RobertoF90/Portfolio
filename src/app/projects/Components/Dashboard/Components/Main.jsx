'use client';

import React from 'react';

import { Flex, Box, Text, Button, Heading, Link } from '@chakra-ui/react';

import Image from 'next/image';

function Main({ project }) {
  return (
    <Flex px={[4, 4, 8, 8]} direction="column" align="center" gap={2}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        {project.title}
      </Text>
      <Flex direction={['column', 'row', 'row', 'row']} pt={{ base: 0, sm: 4 }}>
        <Flex
          flex={['100', '40', '30', '40']}
          direction={{ base: 'column' }}
          align={['center', 'baseline', 'baseline', 'baseline']}
          gap={2}
        >
          <Text fontSize={['lg', 'lg', 'xl', 'xl']} textAlign="center">
            {project.description}
          </Text>
          <Link
            isExternal
            href={project.link}
            _hover={{ textDecoration: 'none' }}
          >
            <Text fontWeight="bold" fontSize="xl" color="blue">
              Visit Project
            </Text>
          </Link>
          <Text>{project.stack}</Text>
          <Text>{project.version}</Text>
        </Flex>
        <Flex flex={{ base: '100', sm: '50', md: '60' }} py={[2, 0]}>
          <Image
            src={`/${project.image}`}
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
