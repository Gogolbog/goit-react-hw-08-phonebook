import { Box, Flex, Spacer, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Flex align="center">
        <Box>
          <ChakraLink as={Link} to="/">
            Home
          </ChakraLink>
        </Box>
        <Spacer />
        <Box>
          <ChakraLink as={Link} to="/login">
            Log in
          </ChakraLink>
        </Box>
        <Box ml={4}>
          <ChakraLink as={Link} to="/signup">
            SignUp
          </ChakraLink>
        </Box>
        <Box ml={4}>
          <ChakraLink as={Link} to="/contacts">
            Contacts
          </ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
};
