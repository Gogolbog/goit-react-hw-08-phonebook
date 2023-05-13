import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgSize="cover"
    >
      <Box
        maxW="md"
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={6} color="gray.800">
          Welcome to our contact manager
        </Heading>
        <Text fontSize="xl" mb={8} color="gray.800">
          This is a simple web application for managing your contacts. To use
          this application, you need to sign up and log in first.
        </Text>
        <Button as={Link} to="/login" colorScheme="blue" mr={4}>
          Log in
        </Button>
        <Button as={Link} to="/signup" colorScheme="teal">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
