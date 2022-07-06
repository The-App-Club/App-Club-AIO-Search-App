import {ChakraProvider} from '@chakra-ui/react';

// https://chakra-ui.com/guides/getting-started/nextjs-guide#customizing-theme

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
