import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';

import { API_URL } from '@/app/utils';

import {
  Flex,
  CloseButton,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
// import { POST } from '@/app/api/projects/route';

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
  const [type, setType] = useState('website');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [stack, setStack] = useState('');
  const [version, setVersion] = useState('');
  const [published, setPublished] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // async function submitForm(formData) {
  //   'use server';

  //   const file = formData.get('image');

  //   console.log(file);
  //   // const formData = new FormData();

  //   // formData.append('type', type);
  //   // formData.append('title', title);
  //   // formData.append('description', description);
  //   // formData.append('image', image);
  //   // formData.append('link', link);
  //   // formData.append('stack', stack);
  //   // formData.append('version', version);
  //   // // formData.append('published', published);
  //   // const o = {};
  //   // formData.forEach((value, key) => (o[key] = value));
  //   // console.log(o);

  //   // fetch(`/api/projects/new`, {
  //   //   method: 'POST',
  //   //   mode: 'no-cors', // no-cors, *cors, same-origin
  //   //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   //   credentials: 'same-origin', // include, *same-origin, omit
  //   //   headers: {
  //   //     'Content-Type': 'application/JSON ',
  //   //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   //   },
  //   //   body: JSON.stringify(o),
  //   // });

  //   closeAddModal();

  //   // window.location.reload();
  // }

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={addModalIsOpen}
        onRequestClose={closeAddModal}
      >
        <CloseButton alignSelf="end" onClick={closeAddModal}></CloseButton>

        <form action={submitForm}>
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
            <Input
              onChange={(e) => {
                setDescription(e.target.value);
                setIsError(false);
              }}
              type="text"
              name="description"
            />
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
            <Input
              onChange={(e) => {
                setLink(e.target.value);
                setIsError(false);
              }}
              type="text"
              name="link"
            />
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
              <Input
                onChange={(e) => {
                  setStack(e.target.value);
                  setIsError(false);
                }}
                type="text"
                name="stack"
              />
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
              <Input
                onChange={(e) => {
                  setVersion(e.target.value);
                  setIsError(false);
                }}
                type="text"
                name="version"
              />
              {isError && (
                <FormErrorMessage fontSize="lg">
                  Please enter the version.
                </FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <Flex gap="6">
            {/* <FormControl
              isInvalid={isError}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <FormLabel>Published</FormLabel>
              <Input onChange={setPublished} type="datetime-local" />
              {isError && (
                <FormErrorMessage fontSize="lg">
                  Please enter the version.
                </FormErrorMessage>
              )}
            </FormControl> */}

            <FormControl
              isInvalid={isError}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <FormLabel>Image</FormLabel>
              <Input
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                  setIsError(false);
                }}
                type="file"
                name="image"
              />
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
