import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import convertDate from '@/lib/utils/convertDate';
import DeleteButton from './buttons/DeleteButton';
import VisitButton from './buttons/VisitButton';
import EditButton from './buttons/EditButton';

export default function ProjectCard({
  project,
  editForm,
  setEditForm,
  setProjectToEdit,
}) {
  return (
    <Card
      w="100%"
      my="2"
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Box maxH={200} maxW={350}>
        <Image
          width="1920"
          height="1080"
          src={project.image}
          alt="project image"
        />
      </Box>

      <Stack w="100%">
        <CardBody>
          <Flex justify="space-between">
            <Flex direction="column">
              <Heading size="md">{project.title}</Heading>
              <Text py="2">
                {project.description.replace(/<\/?[^>]+(>|$)/g, ' ')}
              </Text>
            </Flex>
            <Flex direction="column">
              Published:{' '}
              {project.published ? convertDate(project.published) : ''}
            </Flex>
          </Flex>
        </CardBody>

        <CardFooter>
          <Flex justify="space-between" w="100%">
            <Flex gap="4">
              <VisitButton href={project.link} />
              <EditButton
                project={project}
                editForm={editForm}
                setEditForm={setEditForm}
                setProjectToEdit={setProjectToEdit}
              />
            </Flex>
            <Box>
              <DeleteButton slug={project.slug} />
            </Box>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
}
