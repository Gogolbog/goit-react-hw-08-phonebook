import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name,
        email,
        password,
      })
    )
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
        navigate('/signup');
      })
      .finally(() => {
        setName('');
        setEmail('');
        setPassword('');
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" onChange={e => setName(e.target.value)} />
      </FormControl>
      <FormControl mt={4} id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={e => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mt={4} id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={e => setPassword(e.target.value)} />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={8} w="full">
        Sign up
      </Button>
    </form>
  );
};
