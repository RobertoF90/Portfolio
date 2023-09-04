'use client';

import React, { use } from 'react';

import { Box, Flex, Text, Image, Grid, GridItem, Link } from '@chakra-ui/react';

function LatestWork({project} : any) {


  return (
        <GridItem>
          <Link _hover={{textDecoration : 'none'}} isExternal href={project.link}>
            <Flex direction="column" align="center" padding="1rem 0">
              {project.image && (
                <Image
                  borderRadius="16px"
                  maxH="150px"
                  src={`http://localhost:5000/${project.image}`}
                />
              )}
              <Text fontSize="2xl" fontWeight="bold">
                {project.title}
              </Text>
              <Text>{project.description}</Text>
            </Flex>
          </Link>
        </GridItem>
  );
}

export default LatestWork;
