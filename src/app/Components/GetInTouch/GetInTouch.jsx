'use client';
import React from 'react';

import Form from './Components/Form';

import { Flex, Heading, Text } from '@chakra-ui/react';

function GetInTouch() {
  return (
    <Flex pb={{ base: '6', lg: '12' }} direction="column" align="center">
      <Heading>Get in touch!</Heading>
      <Text>Let&apos;s work together on a project!</Text>
      <Form />
    </Flex>
  );
}

export default GetInTouch;
