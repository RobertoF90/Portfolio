'use client';
import React from 'react';
import { Heading } from '@chakra-ui/react';

function HeadingSub({ text }) {
  return (
    <Heading
      as="h2"
      fontSize="xl"
      borderBottom="2px solid gray"
      alignSelf="baseline"
      w="fit-content"
    >
      {text}
    </Heading>
  );
}

export default HeadingSub;
