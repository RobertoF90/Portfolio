import React from 'react';
import { useFormStatus } from 'react-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { NEXT_URL } from '../../../../lib/utils/nextUrl';

function SubmitButton({ text }) {
  const { pending, data } = useFormStatus();

  return (
    <>
      <Button
        type="submit"
        size="lg"
        fontSize="lg"
        color="#fff"
        bg="#25a473"
        _hover={{ bg: '#17845c' }}
        isLoading={pending}
        loadingText={text}
      >
        Submit
      </Button>
    </>
  );
}

export default SubmitButton;
