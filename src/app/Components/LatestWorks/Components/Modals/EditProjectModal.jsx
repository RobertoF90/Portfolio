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

function EditProjectModal({ project, editModalIsOpen, closeEditModal }) {
  const [type, setType] = useState('website');
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [link, setLink] = useState(project.link);
  const [stack, setStack] = useState(project.stack);
  const [version, setVersion] = useState(project.version);
  const [published, setPublished] = useState(Date.now());
  const [image, setImage] = useState(project.image);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitForm = () => {
    const formData = new FormData();

    formData.append('type', type);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('link', link);
    formData.append('stack', stack);
    formData.append('version', version);
    formData.append('published', published);

    const o = {};
    formData.forEach((value, key) => (o[key] = value));

    fetch(`${API_URL}/api/v1/project/${project.title}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/JSON ',
      },
      body: JSON.stringify(o),
    });

    closeEditModal();

    // window.location.reload();
  };

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
      >
        <CloseButton alignSelf="end" onClick={closeEditModal}></CloseButton>

        {/* <FormControl
          isInvalid={isError}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <FormLabel>Type</FormLabel>
          <RadioGroup onChange={setType}>
            <Flex direction="column" gap="4">
              <Radio value="website">Website</Radio>
              <Radio value="application">Application</Radio>
            </Flex>
          </RadioGroup>

          {isError && (
            <FormErrorMessage fontSize="lg">
              Please enter your title address.
            </FormErrorMessage>
          )}
        </FormControl> */}

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
            value={title}
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
            value={description}
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
            value={link}
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
              value={stack}
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
              value={version}
            />
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
            <FormLabel>Published</FormLabel>
            <Input
              onChange={setPublished}
              type="datetime-local"
              value={published}
            />
            {isError && (
              <FormErrorMessage fontSize="lg">
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
              onClick={submitForm}
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
      </ReactModal>
    </>
  );
}

export default EditProjectModal;
