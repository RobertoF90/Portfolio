'use client';
import React from 'react';

import { Flex, Button, Text, Link, Box } from '@chakra-ui/react';

import ProjectCard from './ProjectCard';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function Admin({ projects }) {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackurl=/client');
    },
  });

  return (
    <Flex>
      {data ? (
        <Flex direction="column" align="center">
          <Text>You are logged in</Text>
          <Link href="/api/auth/signout">
            <Button>Logout</Button>
          </Link>
          <Flex>
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </Flex>
        </Flex>
      ) : (
        <Text>You are not logged in</Text>
      )}
    </Flex>
  );
}

export default Admin;
