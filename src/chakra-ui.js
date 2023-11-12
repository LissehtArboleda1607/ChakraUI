import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Puedes personalizar el tema aquí
});

function ChakraWrapper({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
}

export default ChakraWrapper;