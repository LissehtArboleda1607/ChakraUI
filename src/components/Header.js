import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex alignItems="center">
        <Heading color="white">Tu Logo</Heading>
        <Spacer />
        <Box>
          {/* Otros componentes o enlaces en el header */}
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
