'use client';
import React from 'react';
import { Box, Link } from '@chakra-ui/react';

function SocialIcon({ icon, link }) {
  return (
    <Box
      transition="all 0.2s"
      _hover={{ cursor: 'pointer', transform: 'scale(1.2)' }}
    >
      <Link isExternal href={link}>
        {icon}
      </Link>
    </Box>
  );
}

export default SocialIcon;
