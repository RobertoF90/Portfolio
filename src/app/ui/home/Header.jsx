'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import SocialIcon from './SocialIcon';
import profilePicture from '@/app/ui/home/img/profile-picture.jpeg';
import HeadingSub from './HeadingSub';

function Header() {
  return (
    <Box>
      <Container maxW={['sm', 'md']} textAlign="justify">
        <Flex
          pb={4}
          direction={['column', 'row']}
          gap={4}
          align={'center'}
          justify="space-between"
        >
          <Box alignSelf="baseline">
            <Text fontSize="3xl" fontWeight="bold">
              Roberto Franco
            </Text>
            <Text>Full-Stack Web Developer</Text>
          </Box>
          <Flex
            align="center"
            w="24"
            borderRadius="50%"
            overflow="hidden"
            border="2px solid white"
          >
            <Image
              src={profilePicture}
              alt="Profile Picture of Roberto Franco"
            />
          </Flex>
        </Flex>
        <HeadingSub text={'Bio'} />
        <Text pt={2} pb={4}>
          I&apos;m a full-stack developer based in Lecce (Italy) with a passion
          for languages and technology. I love all things tech related and enjoy
          expressing my creativity through the creation of web applications and
          videogames.
        </Text>

        <HeadingSub text={'On The Web'} />
        <Flex pt={4} justify="center" gap="12" fontSize="2xl">
          <SocialIcon
            icon={<FaGithub />}
            link="https://github.com/RobertoF90"
          />
          <SocialIcon
            icon={<FaXTwitter />}
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
      </Container>
    </Box>
  );
}

export default Header;
