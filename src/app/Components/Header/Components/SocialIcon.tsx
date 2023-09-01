'use client'
import React, { ReactNode } from 'react'

import { Box, Link } from '@chakra-ui/react'

function SocialIcon({icon, link} : any) {
  return (
    <Box transition="all 0.2s" _hover={{cursor : "pointer", transform: "scale(1.2)"}}>
    <Link isExternal href={link}>
        {icon}
    </Link>
    </Box>
  )
}

export default SocialIcon