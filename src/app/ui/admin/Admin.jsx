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
import EditProjectForm from './EditProjectForm';

function Admin({ projects }) {
  const { data, status } = useSession();

  const [createForm, setCreateForm] = useState(false);
  const [editForm, setEditForm] = useState(false);

  const [projectToEdit, setProjectToEdit] = useState([]);

  return (
    <Box>
      {data ? (
        <Flex direction="column" p="4">
          <Box>
            <NavBar createForm={createForm} setCreateForm={setCreateForm} />
            {createForm && (
              <CreateProjectForm
                createForm={createForm}
                setCreateForm={setCreateForm}
              />
            )}
            {editForm && (
              <EditProjectForm
                project={projectToEdit}
                setEditForm={setEditForm}
              />
            )}
          </Box>
          <Box>
            <Flex w="100%" direction="column">
              {projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                  editForm={editForm}
                  setEditForm={setEditForm}
                  setProjectToEdit={setProjectToEdit}
                />
              ))}
            </Flex>
          </Box>
        </Flex>
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
