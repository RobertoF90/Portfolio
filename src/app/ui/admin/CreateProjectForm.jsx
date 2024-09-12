import React from 'react';
import { useState } from 'react';

import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import createProject from '../../admin/actions/createProject';
import SubmitButton from './buttons/SubmitButton';

function CreateProjectForm({ setCreateForm }) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <form action={createProject}>
      <Flex p="4" direction="column" gap="2">
        <FormControl
          isInvalid={isError}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormLabel flex="25%">Title</FormLabel>
          <Input flex="75%" type="text" name="title" />
          {isError && (
            <FormErrorMessage fontSize="lg">
              Please enter your title address.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isError} display="flex" alignItems="center">
          <FormLabel flex="25%">Description</FormLabel>
          <Input flex="75%" type="text" name="description" />
          {isError && (
            <FormErrorMessage fontSize="lg">
              Please enter your description.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isError} display="flex" alignItems="center">
          <FormLabel flex="25%">Link</FormLabel>
          <Input flex="75%" type="text" name="link" />
          {isError && (
            <FormErrorMessage fontSize="lg">
              Please enter a link.
            </FormErrorMessage>
          )}
        </FormControl>
        <Flex gap="6">
          <FormControl isInvalid={isError} display="flex" alignItems="center">
            <FormLabel flex="25%">Stack</FormLabel>
            <Input flex="75%" type="text" name="stack" />
            {isError && (
              <FormErrorMessage fontSize="lg">
                Please enter the stack.
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={isError} display="flex" alignItems="center">
            <FormLabel flex="25%">Version</FormLabel>
            <Input flex="75%" type="text" name="version" />
            {isError && (
              <FormErrorMessage fontSize="lg">
                Please enter the version.
              </FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex gap="6">
          <FormControl isInvalid={isError} display="flex" alignItems="center">
            <FormLabel>Image</FormLabel>
            <Input type="file" name="image" />
            {isError && (
              <FormErrorMessage fontSize="lg">
                Please enter your image.
              </FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        <FormControl display="flex" justifyContent="center" width="100%">
          {loading ? (
            <Button
              size="lg"
              fontSize="lg"
              color="#fff"
              bg="#25a473"
              _hover={{ bg: '#17845c' }}
              isLoading
              loadingText="Logging In"
            />
          ) : (
            <Flex gap={4}>
              <SubmitButton text={'Creating'} />
              <Button size="lg" onClick={() => setCreateForm(false)}>
                Close
              </Button>
            </Flex>
          )}
        </FormControl>
      </Flex>
    </form>
  );
}

export default CreateProjectForm;
