import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';

import {
  Flex,
  CloseButton,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
};

function AddNewProjectModal({ addModalIsOpen, closeAddModal, submitForm }) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitFormFunction = async function (formData) {
    try {
      const res = await submitForm(formData);
      // closeAddModal();
      console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={addModalIsOpen}
        onRequestClose={closeAddModal}
      >
        <CloseButton alignSelf="end" onClick={closeAddModal}></CloseButton>

        <form action={submitFormFunction}>
          <FormControl
            isInvalid={isError}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" />
            {isError && (
              <FormErrorMessage fontSize="lg">
                Please enter your title address.
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={isError}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <FormLabel>Description</FormLabel>
            <Input type="text" name="description" />
            {isError && (
              <FormErrorMessage fontSize="lg">
                Please enter your description.
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            isInvalid={isError}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <FormLabel>Link</FormLabel>
            <Input type="text" name="link" />
            {isError && (
              <FormErrorMessage fontSize="lg">
                Please enter a link.
              </FormErrorMessage>
            )}
          </FormControl>
          <Flex gap="6">
            <FormControl
              isInvalid={isError}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <FormLabel>Stack</FormLabel>
              <Input type="text" name="stack" />
              {isError && (
                <FormErrorMessage fontSize="lg">
                  Please enter the stack.
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={isError}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <FormLabel>Version</FormLabel>
              <Input type="text" name="version" />
              {isError && (
                <FormErrorMessage fontSize="lg">
                  Please enter the version.
                </FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <Flex gap="6">
            <FormControl
              isInvalid={isError}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <FormLabel>Image</FormLabel>
              <Input type="file" name="image" />
              {isError && (
                <FormErrorMessage fontSize="lg">
                  Please enter your image.
                </FormErrorMessage>
              )}
            </FormControl>
          </Flex>

          <FormControl width="auto">
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
              <Button
                type="submit"
                size="md"
                bg="#25a473"
                _hover={{ bg: '#17845c' }}
              >
                <Text color="#fff" p="lg">
                  Submit
                </Text>
              </Button>
            )}
          </FormControl>
        </form>
      </ReactModal>
    </>
  );
}

export default AddNewProjectModal;
