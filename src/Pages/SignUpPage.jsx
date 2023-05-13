import { Box, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';
import { SignUpForm } from 'components/SignUpForm';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <Box maxW="md" mx="auto">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        Sign Up for Phone Book
      </Text>
      <SignUpForm />
      <Stack mt={8} direction="row" spacing={4} alignItems="center">
        <Text>
          Already have an account?{' '}
          <ChakraLink
            as={Link}
            to="/login"
            color="blue.500"
            textDecoration="underline"
            _hover={{ color: 'blue.600', textDecoration: 'none' }}
          >
            Login
          </ChakraLink>
        </Text>
      </Stack>
    </Box>
  );
};
