import { Box, Flex, Spacer, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { selectToken } from 'selectors';
import { useSelector } from 'react-redux';

export const Header = () => {
  const userIsAuth = useSelector(selectToken);
  return (
    <Box
      bgGradient="linear(to-r, #13df1d, #fffb00)"
      p={4}
      borderRadius="0 0 20px 20px"
    >
      <Flex align="center">
        <Box mr={4}>
          <ChakraLink as={Link} to="/">
            <Text fontSize="lg" fontWeight="bold" color="purple.500">
              Home
            </Text>
          </ChakraLink>
        </Box>
        <Box mr={4}>
          {userIsAuth && (
            <ChakraLink as={Link} to="/contacts">
              <Text fontSize="lg" fontWeight="bold" color="purple.500">
                Contacts
              </Text>
            </ChakraLink>
          )}
        </Box>
        <Spacer />
        <Box>
          {!userIsAuth && (
            <ChakraLink as={Link} to="/login">
              Log in
            </ChakraLink>
          )}
        </Box>
        <Box ml={4}>
          {!userIsAuth && (
            <ChakraLink as={Link} to="/register">
              SignUp
            </ChakraLink>
          )}
        </Box>
        {userIsAuth && <UserMenu />}
      </Flex>
    </Box>
  );
};
