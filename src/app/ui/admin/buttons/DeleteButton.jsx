'use client';
import React from 'react';
import { useState } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import deleteProject from '../../../admin/actions/deleteProject';
import { DeleteIcon } from '@chakra-ui/icons';

function DeleteButton({ slug }) {
  const [confirm, setConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const deleteProjectWithSlug = deleteProject.bind(null, slug);
  const handleSubmit = async function () {
    setDeleting(true);
    await deleteProjectWithSlug(slug);
    setConfirm(false);
    setDeleting(false);
  };

  return (
    <>
      {confirm ? (
        <Flex gap="2">
          <Button variant="solid" colorScheme="red">
            Sure?
          </Button>

          <form action={handleSubmit}>
            <Flex gap="2">
              <Button
                onClick={() => {
                  setConfirm(false);
                }}
                variant="solid"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                isLoading={deleting}
                loadingText="Deleting Page"
                variant="solid"
                colorScheme="red"
              >
                Yes
              </Button>
            </Flex>
          </form>
        </Flex>
      ) : (
        <Button
          onClick={() => {
            setConfirm(true);
          }}
          variant="solid"
          colorScheme="red"
        >
          <DeleteIcon />
        </Button>
      )}
    </>
  );
}

export default DeleteButton;
