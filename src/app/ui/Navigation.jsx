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

import Link from 'next/link';

import { useColorMode, useColorModeValue } from '@chakra-ui/react';

function Navigation({ cookie }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box background={colorMode}>
      <Container p="2">
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Link href="/">
              <Box p="2">
                <Heading as="h1" fontSize="lg">
                  Roberto Franco
                </Heading>
              </Box>
            </Link>
          </Flex>

          <Flex align="right">
            {cookie && colorMode === 'light' ? (
              <Button
                variant="ghost"
                colorScheme="whiteAlpha.900"
                onClick={toggleColorMode}
              >
                <Icon as={MoonIcon} />
              </Button>
            ) : (
              <Button
                variant="ghost"
                colorScheme="whiteAlpha.900"
                onClick={toggleColorMode}
              >
                <Icon as={SunIcon} />
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
    </Box>
  );
}

export default Navigation;
