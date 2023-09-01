'use client';
import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

function Navigation() {
  return (
    <Flex justify="space-between">
      <Box >
        <Button>
          <Text>Home</Text>
        </Button>
      </Box>
      <Box>
        <Flex>
          <Button>
            <Text >Websites</Text>
          </Button>
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
