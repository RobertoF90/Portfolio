'use client';
import React from 'react';

import Navigation from '../Navigation';

import Image from 'next/image';

import { Box, Container, Flex, Text, Link } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import SocialIcon from './Components/SocialIcon';

function Header() {
  return (
    <Box>
      <Flex
        py={{ base: '2', md: '6' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justifyContent="center"
        gap="2"
      >
        <Box textAlign="center">
          <Text fontSize="5xl" fontWeight="bold">
            Roberto Franco
          </Text>
          <Text fontSize="xl">Full-Stack Web Developer</Text>
        </Box>
        <Box w="32" borderRadius="50%" overflow="hidden">
          <Image
            width={250}
            height={259}
            src="/img/profile picture.jpeg"
            alt="Profile Picture of Roberto"
          />
        </Box>
      </Flex>
      <Container maxW="4xl" textAlign="center">
        <Text fontSize="lg">
          I&apos;m a full-stack developer based in Lecce (Italy) with a passion
          for languages and technology. I love all things tech related and enjoy
          expressing my creativity through the creation of web applications and
          videogames.
        </Text>
      </Container>

      <Flex justify="center" py="6" px="8">
        <Text
          textAlign="center"
          transition="all 0.2s"
          _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }}
          fontSize="xl"
        >
          I&apos;m open to freelance work! Feel free to get in touch!
        </Text>
      </Flex>

      <Flex justify="center" gap="12" fontSize="2xl">
        <SocialIcon icon={<FaGithub />} link="https://github.com/RobertoF90" />
        <SocialIcon
          icon={<FaTwitter />}
          link="https://twitter.com/RFrancoDev"
        />
        <SocialIcon
          icon={<FaLinkedin />}
          link="https://www.linkedin.com/in/roberto-franco-2bb321116/"
        />
        <SocialIcon
          icon={<FaInstagram />}
          link="https://www.instagram.com/robertofranco.dev/"
        />
      </Flex>
    </Box>
  );
}

export default Header;
