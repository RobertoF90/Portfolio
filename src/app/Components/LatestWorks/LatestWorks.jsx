'use client';
import { useState, useEffect, React } from 'react';

import LatestWork from './Components/LatestWork';

import { Button, Text, Grid, Flex, Heading, Link } from '@chakra-ui/react';

import AddNewProjectModal from './Modals/AddNewProjectModal';

import { useSession } from 'next-auth/react';

import { API_URL } from '../../utils';

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
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      justify="center"
      pt="6"
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
            py="6"
            px={{ base: '7.5%', sm: '15%', md: '15%', lg: '20%' }}
            templateColumns={{ base: '1fr', sm: '1fr ', md: '1fr 1fr' }}
            gap="6"
            justifyItems="center"
          >
            {data
              ? projects.map((project, i) => (
                  <LatestWork
                    key={i}
                    project={project}
                    onClick={() => data && openSubModal()}
                  />
                ))
              : projects.map((project, i) => (
                  <Link
                    key={i}
                    isExternal
                    href={project.link}
                    _hover={{ cursor: 'pointer', textDecoration: 'none' }}
                  >
                    <LatestWork
                      project={project}
                      onClick={() => data && openSubModal()}
                    />
                  </Link>
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
