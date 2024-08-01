import React from 'react';

import { Flex, Button, Text } from '@chakra-ui/react';

import Link from 'next/link';

function NavBar({ createForm, setCreateForm }) {
  return (
    <Flex justify="space-between" align="center" w="100%">
      <Button onClick={() => setCreateForm(!createForm)} colorScheme="green">
        Create New Project
      </Button>

      <Flex flexDirection="column" align="center" gap="2">
        <Text>You are logged in</Text>
        <Link href="/api/auth/signout">
          <Button>Logout</Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default NavBar;
