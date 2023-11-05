'use client';
import { useState, useEffect, React } from 'react';

import LatestWork from './Components/LatestWork';

import { Button, Text, Grid, Flex, Heading } from '@chakra-ui/react';

import AddNewProjectModal from './Modals/AddNewProjectModal';

import { useSession } from 'next-auth/react';

import { API_URL } from './../../utils';

function LatestWorks({ projects }) {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);
  const [addModalIsOpen, setaddIsOpen] = useState(false);

  function openAddModal() {
    setaddIsOpen(true);
  }

  function closeAddModal() {
    setaddIsOpen(false);
  }

  return (
    <Flex
      p={{ base: '6', lg: '12' }}
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      justify="center"
    >
      {loading ? (
        <Text>LOADING</Text>
      ) : (
        <Flex direction="column" align="center">
          <Heading>Latest Works</Heading>
          {data && (
            <Button mt="4" onClick={openAddModal}>
              <Text>Add New</Text>
            </Button>
          )}
          <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gap="4"
            justifyItems="center"
            padding="6"
          >
            {projects.map((project, i) => (
              <LatestWork
                key={i}
                project={project}
                onClick={() => openSubModal()}
              />
            ))}
          </Grid>
        </Flex>
      )}

      <AddNewProjectModal
        addModalIsOpen={addModalIsOpen}
        closeAddModal={closeAddModal}
        // setProjects={setProjects}
      />
    </Flex>
  );
}

export default LatestWorks;
