'use client';
import React from 'react';

import { Flex, Button, Text, Box } from '@chakra-ui/react';

import ProjectCard from './ProjectCard';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import NavBar from './NavBar';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

function Admin({ projects }) {
  const { data, status } = useSession();

  return (
    <Flex h="100%" p="4">
      {data ? (
        <Flex w="100%" direction="column" align="center">
          <NavBar />

          <Flex w="100%">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </Flex>
        </Flex>
      ) : status === 'loading' ? (
        <Flex></Flex>
      ) : (
        <Flex>
          <Text>You are not logged in</Text>
          <Button onClick={() => signIn()}>Sign In</Button>
        </Flex>
      )}
    </Flex>
  );
}

export default Admin;
