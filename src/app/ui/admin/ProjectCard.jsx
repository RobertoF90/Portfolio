import React from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Input,
  FormControl,
  Box,
} from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

import convertDate from '@/lib/utils/convertDate';

import DeleteButton from './buttons/DeleteButton';
import VisitButton from './buttons/VisitButton';
import EditButton from './buttons/EditButton';

export default function ProjectCard({
  project,
  handleDelete,
  editForm,
  setEditForm,
}) {
  return (
    <Card
      w="100%"
      my="2"
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Box maxH={200}>
        <Image
          width="240"
          height="160"
          src={project.image}
          alt="project image"
        />
      </Box>

      <Stack w="100%">
        <CardBody>
          <Flex justify="space-between">
            <Flex flex="75%" direction="column">
              <Heading size="md">{project.title}</Heading>
              <Text py="2">
                {project.description.replace(/<\/?[^>]+(>|$)/g, ' ')}
              </Text>
            </Flex>
            <Flex flex="25%" direction="column">
              Published:{' '}
              {project.published ? convertDate(project.published) : ''}
            </Flex>
          </Flex>
        </CardBody>

        <CardFooter gap="4">
          <VisitButton href={project.link} />
          <EditButton editForm={editForm} setEditForm={setEditForm} />
          <DeleteButton slug={project.slug} />
        </CardFooter>
      </Stack>
    </Card>
  );
}
