// src/Chakra.js
'use client';

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function Chakra({ children }) {
  const [cookies, setCookies] = useState('');

  // This effect will only run on the client-side (for client-side cookies)
  useEffect(() => {
    const cookieStr = document.cookie ?? '';
    setCookies(cookieStr);
  }, []);

  const colorModeManager =
    typeof cookies === 'string' && cookies
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}
