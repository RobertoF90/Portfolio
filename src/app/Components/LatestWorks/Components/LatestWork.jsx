'use client';

import { useState, React } from 'react';
import { useSession } from 'next-auth/react';

import { Box, Flex, Text, GridItem, Link, Heading } from '@chakra-ui/react';
import SubMenuModal from './Modals/SubMenu';

import Image from 'next/image';

function LatestWork({ project }) {
  const { data } = useSession();
  const [subModalIsOpen, setSubIsOpen] = useState(false);

  function openSubModal() {
    setSubIsOpen(true);
  }
  function closeSubModal() {
    setSubIsOpen(false);
  }

  return (
    <GridItem>
      <Flex
        _hover={{ cursor: 'pointer' }}
        onClick={openSubModal}
        direction="column"
        align="center"
        gap={2}
      >
        {project.image && (
          <Box borderRadius="16px" w="100%" overflow="hidden">
            <Image
              width={1920}
              height={1080}
              src={project.image}
              alt="Project image"
            />
          </Box>
        )}
        <Heading textAlign="center" fontSize="xl">
          {project.title}
        </Heading>
        <Text textAlign="center">{project.description}</Text>
      </Flex>

      <SubMenuModal
        project={project}
        subModalIsOpen={subModalIsOpen}
        closeSubModal={closeSubModal}
      />
    </GridItem>
  );
}

export default LatestWork;
