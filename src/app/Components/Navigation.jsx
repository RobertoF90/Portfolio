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
    sm: false,
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
            display={['flex', 'none', 'none', 'none']}
            as={IconButton}
            aria-label="Opzioni"
            icon={<HamburgerIcon />}
          />
          <MenuList zIndex={10}>
            <Link href="/projects">
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>Get in Touch</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      ) : (
        <Box display={['none', 'flex', 'flex', 'flex']}>
          <Flex gap="4">
            <Link href="/projects">
              <Button>
                <Text>Projects</Text>
              </Button>
            </Link>
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
