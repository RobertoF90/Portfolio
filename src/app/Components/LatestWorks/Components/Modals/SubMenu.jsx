import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';

import {
  CloseButton,
  Flex,
  Button,
  Text,
  Link,
  Heading,
  Image,
} from '@chakra-ui/react';

import EditProjectModal from './EditProjectModal';

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

import deleteProject from './actions/deleteProject';

import editProject from './actions/editProject';

function SubMenuModal({ project, subModalIsOpen, closeSubModal }) {
  const [editModalIsOpen, setEditIsOpen] = useState(false);

  function openEditModal() {
    setEditIsOpen(true);
  }
  function closeEditModal() {
    setEditIsOpen(false);
  }

  const [isError, setIsError] = useState(false);

  async function handleDelete(title) {
    if (window.confirm('Are you sure?')) {
      try {
        const res = await deleteProject(title);

        closeSubModal();
        console.log(res.message);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={subModalIsOpen}
        onRequestClose={closeSubModal}
      >
        <CloseButton alignSelf="end" onClick={closeSubModal}></CloseButton>

        <Flex direction="column" align="center" gap="6">
          <Text fontSize="2xl" fontWeight="bold">
            {project.title}
          </Text>
          <Text fontSize="lg">{project.description}</Text>

          <Image src={project.image} />

          <Flex gap="6">
            <Link
              _hover={{ textDecoration: 'none' }}
              isExternal
              href={project.link}
            >
              <Button>
                <Text>Open</Text>
              </Button>
            </Link>
            <Button onClick={openEditModal}>
              <Text>Edit</Text>
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handleDelete(project.title)}
            >
              <Text>Delete</Text>
            </Button>
          </Flex>
        </Flex>
      </ReactModal>

      <EditProjectModal
        project={project}
        editModalIsOpen={editModalIsOpen}
        closeEditModal={closeEditModal}
        editProject={editProject}
      />
    </>
  );
}

export default SubMenuModal;
