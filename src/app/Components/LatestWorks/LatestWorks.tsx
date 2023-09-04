'use client'
import React from 'react'
import { useState } from 'react'

import LatestWork from './Components/LatestWork'

import { Button, Text } from '@chakra-ui/react'

import AddNewProjectModal from './../Modals/AddNewProjectModal'




function LatestWorks() {

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <LatestWork />
      <AddNewProjectModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <Button onClick={openModal}><Text>Add New</Text></Button>
    </div>
  )
}



export default LatestWorks