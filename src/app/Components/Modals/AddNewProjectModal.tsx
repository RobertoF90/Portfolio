import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';

import {
  CloseButton,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
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

function LoginModal({ modalIsOpen, closeModal }: any ) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitForm = () => {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    fetch('http://localhost:5000/api/v1/project', {
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
  };

  return (
    <>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CloseButton alignSelf="end" onClick={closeModal}></CloseButton>
        <form action="/api/v1/project" method="post">
          <FormControl
            isInvalid={isError}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <FormLabel fontSize="2rem">Title</FormLabel>
            <Input
              onChange={(e) => {
                setTitle(e.target.value);
                setIsError(false);
              }}
              type="text"
              name="title"
              fontSize="1.8rem"
            />
            {isError && (
              <FormErrorMessage fontSize="1.4rem">
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
            <FormLabel fontSize="2rem">description</FormLabel>
            <Input
              onChange={(e) => {
                setDescription(e.target.value);
                setIsError(false);
              }}
              type="text"
              fontSize="1.8rem"
            />
            {isError && (
              <FormErrorMessage fontSize="1.4rem">
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
            <FormLabel fontSize="2rem">Image</FormLabel>
            <Input
              onChange={(e) => {
                setImage(e.target.files[0]);
                setIsError(false);
              }}
              type="file"
              name="image"
              fontSize="1.8rem"
            />
            {isError && (
              <FormErrorMessage fontSize="1.4rem">
                Please enter your image.
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
                onClick={submitForm}
                size="lg"
                bg="#25a473"
                _hover={{ bg: '#17845c' }}
              >
                <Text color="#fff" fontSize="1.8rem" p="2rem">
                  Log In
                </Text>
              </Button>
            )}
          </FormControl>
        </form>
      </ReactModal>
    </>
  );
}

export default LoginModal;
