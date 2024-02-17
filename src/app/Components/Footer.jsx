'use client';
import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex mt="2" py="2" justify="center" borderTop="1px solid #000">
      <Text textAlign="center" fontSize="lg">
        {' '}
        &copy; 2023 Roberto Franco
      </Text>
    </Flex>
  );
}

export default Footer;
