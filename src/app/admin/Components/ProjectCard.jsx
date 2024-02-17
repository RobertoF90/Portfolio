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
} from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

// import convertDate from '../../../utils/convertDate';

// import DeleteButton from './DeleteButton';

export default function ProjectCard({ project, handleDelete }) {
  return (
    <Card
      my="2"
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        width="240"
        height="160"
        src={project.image}
        alt={project.imageAlt}
      />

      <Stack>
        <CardBody>
          <Flex justify="space-between">
            <Flex flex="75%" direction="column">
              <Heading size="md">{project.title}</Heading>
              <Text py="2">
                {project.description.replace(/<\/?[^>]+(>|$)/g, ' ')}
              </Text>
            </Flex>
            <Flex flex="25%" direction="column">
              Published: {project.version}
            </Flex>
          </Flex>
        </CardBody>

        <CardFooter gap="4">
          <Link href={project.link}>
            <Button variant="solid" colorScheme="blue">
              Visit
            </Button>
          </Link>
          <Button variant="solid" colorScheme="blue">
            Edit
          </Button>
          {/* <DeleteButton slug={project.slug} /> */}
        </CardFooter>
      </Stack>
    </Card>
  );
}
