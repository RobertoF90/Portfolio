'use client';
import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// import { Link } from 'react-scroll';
import { useBreakpointValue } from '@chakra-ui/react';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

function Navigation() {
  const { data } = useSession();

  const mobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

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
      {mobile ? (
        <Menu>
          <MenuButton
            display={['flex', 'flex', 'none', 'none']}
            as={IconButton}
            aria-label="Opzioni"
            icon={<HamburgerIcon />}
          />
          <MenuList>
            <Link href="/websites">
              <MenuItem>Websites</MenuItem>
            </Link>
            <Link href="/projects">
              <MenuItem>Web Apps</MenuItem>
            </Link>

            <Link href="/">
              <MenuItem>Get in Touch</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      ) : (
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
      )}
    </Flex>
  );
}

export default Navigation;
