import React from 'react';

import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function ProjectsButton() {
  return (
    <Flex justify="center" py={4}>
      <Link href="/portfolio">
        <Button>
          <Flex align="center">
            <Text>Portfolio</Text>
            <Icon as={MdOutlineKeyboardArrowRight} boxSize={6}></Icon>
          </Flex>
        </Button>
      </Link>
    </Flex>
  );
}

export default ProjectsButton;
