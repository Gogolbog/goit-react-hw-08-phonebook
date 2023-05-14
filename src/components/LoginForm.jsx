import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      login({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(error => console.log(error))
      .finally(() => {
        setEmail('');
        setPassword('');
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl mt={8} id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={e => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mt={4} id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={e => setPassword(e.target.value)} />
      </FormControl>
      <Stack mt={8} direction="row" spacing={4} justify="center">
        <Button type="submit" colorScheme="blue" size="lg" w="full">
          Log in
        </Button>
      </Stack>
      <Stack mt={8} direction="row" spacing={4} alignItems="center">
        <Text>
          Don't have account yet?{' '}
          <ChakraLink
            as={Link}
            to="/signup"
            color="blue.500"
            textDecoration="underline"
            _hover={{ color: 'blue.600', textDecoration: 'none' }}
          >
            SignUp
          </ChakraLink>
        </Text>
      </Stack>
    </form>
  );
};
