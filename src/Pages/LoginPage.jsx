import { Box, Heading, Text } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm';

const Login = () => {
  return (
    <Box maxW="md" mx="auto" textAlign="center">
      <Heading as="h1" mb={4} fontSize="4xl">
        Welcome to Contacts!
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Log in to access your contact list and keep it up to date.
      </Text>
      <LoginForm />
    </Box>
  );
};

export default Login;
