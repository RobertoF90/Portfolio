import React from 'react';

import { Flex, Button, Text, Link, Box } from '@chakra-ui/react';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function Admin() {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackurl=/client');
    },
  });
  console.log(data);

  return (
    <Flex align="center" justify="center" h="100vh">
      {data ? (
        <Flex direction="column" align="center">
          <Text>You are logged in</Text>
          <Link href="/api/auth/signout">
            <Button>Logout</Button>
          </Link>
        </Flex>
      ) : (
        <Text>You are not logged in</Text>
      )}
    </Flex>
  );
}

export default Admin;
