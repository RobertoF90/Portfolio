'use client';
import React from 'react';

import { Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

function Navigation({ projects, setSelected }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 6,

      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 6,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperElRef.current, params);

    // initialize swiper
    swiperElRef.current.initialize();
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {});
  }, []);

  function handleClick(title) {
    const [project] = projects.filter((project) => project.title === title);

    setSelected(project);
  }

  return (
    <Box width="100%" px={{ base: '3', lg: '6' }}>
      <swiper-container space-between={20} ref={swiperElRef} pagination="true">
        {projects.map((project, i) => (
          <swiper-slide key={i}>
            <Box
              py="8"
              transition="all 0.1s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image
                src={project.image}
                width={1349}
                height={643}
                alt={project.title}
                priority={true}
                onClick={(e) => handleClick(e.target.alt)}
              />
            </Box>
          </swiper-slide>
        ))}
      </swiper-container>
    </Box>
  );
}

export default Navigation;
