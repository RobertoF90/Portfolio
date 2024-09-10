'use client';

import React from 'react';

import Link from 'next/link';
import { Button } from '@chakra-ui/react';

import { EditIcon } from '@chakra-ui/icons';

function EditButton({ editForm, setEditForm }) {
  return (
    <Button
      title="Edit"
      variant="solid"
      colorScheme="blue"
      onClick={() => setEditForm(true)}
    >
      <EditIcon />
    </Button>
  );
}

export default EditButton;
