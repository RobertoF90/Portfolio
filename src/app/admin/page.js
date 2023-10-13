'use client';
import React from 'react';
import { useState } from 'react';

import withIronSessionApiRoute from '../../pages/api/login';

import {
  Flex,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
} from '@chakra-ui/react';

function page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function handleClick() {
    try {
      const res = await fetch('api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const { ok } = await res.json();
      setLoggedIn(ok);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex align="center" justify="center" h="100vh">
      <Flex direction="column" align="center" gap="6">
        <FormControl
          isInvalid={isError}
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <FormLabel>Username</FormLabel>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
              setIsError(false);
            }}
            type="text"
            name="title"
          />
          {isError && (
            <FormErrorMessage fontSize="1.4rem">
              Please enter your username.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={isError}
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
              setIsError(false);
            }}
            type="password"
          />
          {isError && (
            <FormErrorMessage fontSize="1.4rem">
              Please enter your password.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl width="auto">
          {loading ? (
            <Button
              size="lg"
              fontSize="1.8rem"
              color="#fff"
              bg="#25a473"
              _hover={{ bg: '#17845c' }}
              isLoading
              loadingText="Logging In"
            />
          ) : (
            <Button
              onClick={handleClick}
              size="md"
              bg="#25a473"
              _hover={{ bg: '#17845c' }}
            >
              <Text color="#fff" p="1rem">
                Log In
              </Text>
            </Button>
          )}
        </FormControl>
      </Flex>
    </Flex>
  );
}

export default page;
