'use client';
import React from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Container,
  Button,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

import { useTheme } from 'next-themes';
import Link from 'next/link';

function Navigation() {
  const { theme, setTheme } = useTheme();
  return (
    <Container p="2">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Link href="/">
            <Heading as="h1" fontSize="lg">
              Roberto Franco
            </Heading>
          </Link>
        </Flex>

        <Flex align="right">
          {(theme === 'dark' && (
            <Button
              variant="ghost"
              colorScheme="whiteAlpha.900"
              onClick={() => setTheme('light')}
            >
              <Icon as={SunIcon} />
            </Button>
          )) || (
            <Button
              variant="ghost"
              colorScheme="whiteAlpha.900"
              onClick={() => setTheme('dark')}
            >
              <Icon as={MoonIcon} />
            </Button>
          )}
          {/* <Box>
            <Button variant="ghost" colorScheme="whiteAlpha.900">
              <Icon as={HamburgerIcon} />
            </Button>
          </Box> */}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navigation;
