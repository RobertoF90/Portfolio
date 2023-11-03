'use client';
import React from 'react';
import { useState } from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';

function Form() {
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    // TESTING
    // formData.append('access_key', 'e27e322c-6e8c-424f-8b8e-f1fbc48f9c6a');

    formData.append('access_key', 'e27e322c-6e8c-424f-8b8e-f1fbc48f9c6a');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setLoading(false);
      setFormSent(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        w={{ base: '100%', lg: '100%' }}
        p="4"
        direction="column"
        align="center"
        gap="4"
      >
        <FormControl isRequired>
          <FormLabel textAlign="center">Full Name</FormLabel>
          <Input type="text" name="Full Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textAlign="center">Email Address</FormLabel>
          <Input type="email" name="Email" />
          <FormHelperText>
            I&apos;ll never share you email with anyone.
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel textAlign="center">Message</FormLabel>
          <Textarea name="Message" placeholder="Write here your message..." />
        </FormControl>

        {!formSent && !loading ? (
          <Button colorScheme="blue" type="submit">
            <Text color="#fff">Send!</Text>
          </Button>
        ) : loading ? (
          <Button isLoading loadingText="sending"></Button>
        ) : (
          <Button colorScheme="blue">
            <Text color="#fff">Sent</Text>
          </Button>
        )}
      </Flex>
    </form>
  );
}

export default Form;
