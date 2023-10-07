'use client';
import React from 'react';
import { useState, useEffect } from 'react';

import LatestWork from './Components/LatestWork';

import { Button, Text, Grid, Flex } from '@chakra-ui/react';

import AddNewProjectModal from '../Modals/AddNewProjectModal';

function LatestWorks() {
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const res = await fetch('http://localhost:5000/api/v1/project');

      if (!res.ok) {
        throw new Error('Failed to fetch resources');
      }

      const data = await res.json();
      setProjects(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      justify="center"
    >
      {loading ? (
        <Text>LOADING</Text>
      ) : (
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          justifyItems="center"
          padding="2rem "
        >
          {projects.reverse().map((project, i) => (
            <LatestWork key={i} project={project} />
          ))}
        </Grid>
      )}
      <AddNewProjectModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <Button onClick={openModal}>
        <Text>Add New</Text>
      </Button>
    </Flex>
  );
}

export default LatestWorks;
