'use client';

import React from 'react';

import Link from 'next/link';
import { Button } from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

function VisitButton({ href }) {
  return (
    <Link href={href} target="_blank">
      <Button title="Visit" variant="solid" colorScheme="blue">
        <ExternalLinkIcon />
      </Button>
    </Link>
  );
}

export default VisitButton;
