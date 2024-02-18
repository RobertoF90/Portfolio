'use client';
import { useState, React } from 'react';

import LatestWork from './Components/LatestWork';

import { Button, Text, Grid, Flex, Heading, Link } from '@chakra-ui/react';

import AddNewProjectModal from './Modals/AddNewProjectModal';

import submitForm from './Modals/actions/submitForm';

function LatestWorks({ projects }) {
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

          <Grid
            py="6"
            px={{ base: '7.5%', sm: '15%', md: '15%', lg: '20%' }}
            templateColumns={{ base: '1fr', sm: '1fr ', md: '1fr 1fr' }}
            gap="6"
            justifyItems="center"
          >
            {projects.map((project, i) => (
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
        submitForm={submitForm}
        // setProjects={setProjects}
      />
    </Flex>
  );
}

export default LatestWorks;
