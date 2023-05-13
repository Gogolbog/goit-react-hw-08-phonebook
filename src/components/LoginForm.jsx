import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
      .then(() => {
        navigate('/contacts');
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
    </form>
  );
};
