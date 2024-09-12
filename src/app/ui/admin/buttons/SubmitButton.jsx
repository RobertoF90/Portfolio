'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@chakra-ui/react';

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
