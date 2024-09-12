'use client';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

function EditButton({ project, editForm, setEditForm, setProjectToEdit }) {
  const handleClick = function () {
    editForm ? setEditForm(false) : setEditForm(true);
    setProjectToEdit(project);
  };

  return (
    <Button
      title="Edit"
      variant="solid"
      colorScheme="blue"
      onClick={() => handleClick()}
    >
      <EditIcon />
    </Button>
  );
}

export default EditButton;
