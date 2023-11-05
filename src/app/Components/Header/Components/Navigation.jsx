'use client';
import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

function Navigation() {
  const { data } = useSession();
  return (
    <Flex py="2" px="4" justify="space-between">
      <Flex gap="4">
        <Link href="/">
          <Button>
            <Text>Home</Text>
          </Button>
        </Link>

        {data && (
          <Link href="/admin">
            <Button>
              <Text>Admin</Text>
            </Button>
          </Link>
        )}
      </Flex>
      <Box>
        <Flex gap="4">
          <Link href="/websites">
            <Button>
              <Text>Websites</Text>
            </Button>
          </Link>
          <Button>
            <Text>Web Apps</Text>
          </Button>
          <Button>
            <Text>Get in Touch</Text>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navigation;
