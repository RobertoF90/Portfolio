'use client';

import { useState, React } from 'react';
import { useSession } from 'next-auth/react';

import { Flex, Text, Image, GridItem, Link, Heading } from '@chakra-ui/react';
import SubMenuModal from './Modals/SubMenu';

function LatestWork({ project }) {
  const { data } = useSession();
  const [subModalIsOpen, setSubIsOpen] = useState(false);

  function openSubModal() {
    setSubIsOpen(true);
  }
  function closeSubModal() {
    setSubIsOpen(false);
  }

  return data ? (
    <GridItem>
      <Flex
        _hover={{ cursor: 'pointer' }}
        onClick={openSubModal}
        direction="column"
        align="center"
        py="4"
      >
        {project.image && (
          <Image borderRadius="16px" maxH="150" src={project.image} alt="" />
        )}
        <Heading textAlign="center" fontSize="2xl">
          {project.title}
        </Heading>
        <Text>{project.description}</Text>
      </Flex>

      <SubMenuModal
        project={project}
        subModalIsOpen={subModalIsOpen}
        closeSubModal={closeSubModal}
      />
    </GridItem>
  ) : (
    <GridItem>
      <Link _hover={{ textDecoration: 'none' }} isExternal href={project.link}>
        <Flex direction="column" align="center" py="4">
          {project.image && (
            <Image borderRadius="16px" maxH="150" src={project.image} alt="" />
          )}
          <Heading textAlign="center" fontSize="2xl">
            {project.title}
          </Heading>
          <Text>{project.description}</Text>
        </Flex>
      </Link>
    </GridItem>
  );
}

export default LatestWork;
