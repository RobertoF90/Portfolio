import Header from '@/app/Components/Navigation';
import { ChakraProvider } from '@chakra-ui/react';

import { ReactNode } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
