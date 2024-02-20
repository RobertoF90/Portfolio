'use client';
import React from 'react';
import { useState } from 'react';

import { Flex, Button, Text, Box, Grid, GridItem } from '@chakra-ui/react';

import ProjectCard from './ProjectCard';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import NavBar from './NavBar';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import CreateProjectForm from './CreateProjectForm';

function Admin({ projects }) {
  const { data, status } = useSession();

  const [createForm, setCreateForm] = useState(false);

  return (
    <Box>
      {data ? (
        <Grid p="4" h="100%" gridTemplateRows="10fr 90fr">
          <GridItem>
            <NavBar createForm={createForm} setCreateForm={setCreateForm} />
            {createForm && <CreateProjectForm />}
          </GridItem>
          <GridItem>
            <Flex w="100%" h="100%" direction="column">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </Flex>
          </GridItem>
        </Grid>
      ) : status === 'loading' ? (
        <Flex></Flex>
      ) : (
        <Flex>
          <Text>You are not logged in</Text>
          <Button onClick={() => signIn()}>Sign In</Button>
        </Flex>
      )}
    </Box>
  );
}

export default Admin;
