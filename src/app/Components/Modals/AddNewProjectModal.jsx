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

function LoginModal({ modalIsOpen, closeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [stack, setStack] = useState('');
  const [version, setVersion] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitForm = () => {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('link', link);
    formData.append('stack', stack);
    formData.append('version', version);
    console.log(formData);

    // fetch('https://roberto-portfolio.cyclic.cloud/api/v1/project', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   method: 'POST',
    //   body: formData,
    // });

    // fetch('http://localhost:5000/api/v1/project', {
    //   method: 'POST',
    //   mode: 'no-cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   // body: JSON.stringify({ title, description }), THIS WORKS
    //   body: formData,
    // });

    fetch('https://roberto-portfolio.cyclic.cloud/api/v1/project', {
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/JSON ',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
  };

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <CloseButton alignSelf="end" onClick={closeModal}></CloseButton>

        <FormControl
          isInvalid={isError}
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <FormLabel>Title</FormLabel>
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
              setIsError(false);
            }}
            type="text"
            name="title"
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
          <FormLabel>description</FormLabel>
          <Input
            onChange={(e) => {
              setDescription(e.target.value);
              setIsError(false);
            }}
            type="text"
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
          <FormLabel>Link</FormLabel>
          <Input
            onChange={(e) => {
              setLink(e.target.value);
              setIsError(false);
            }}
            type="text"
          />
          {isError && (
            <FormErrorMessage fontSize="1.4rem">
              Please enter a link.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={isError}
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <FormLabel>Stack</FormLabel>
          <Input
            onChange={(e) => {
              setStack(e.target.value);
              setIsError(false);
            }}
            type="text"
          />
          {isError && (
            <FormErrorMessage fontSize="1.4rem">
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
          <Input
            onChange={(e) => {
              setVersion(e.target.value);
              setIsError(false);
            }}
            type="text"
          />
          {isError && (
            <FormErrorMessage fontSize="1.4rem">
              Please enter the version.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={isError}
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <FormLabel>Image</FormLabel>
          <Input
            onChange={(e) => {
              setImage(e.target.files[0]);
              setIsError(false);
            }}
            type="file"
            name="image"
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
              size="md"
              bg="#25a473"
              _hover={{ bg: '#17845c' }}
            >
              <Text color="#fff" p="1rem">
                Submit
              </Text>
            </Button>
          )}
        </FormControl>
      </ReactModal>
    </>
  );
}

export default LoginModal;
